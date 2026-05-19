# Lead Capture Setup Guide

Your website is now configured to capture leads via email and Google Sheets. Follow the steps below to activate.

---

## 1. Email Notifications (Resend)

Resend is a simple email service with a generous free tier (100 emails/day).

### Step 1: Create a Resend Account
1. Go to https://resend.com
2. Sign up for a free account
3. Verify your email

### Step 2: Get Your API Key
1. Go to https://resend.com/api-keys
2. Click "Create API Key"
3. Name it something like "BandC Website"
4. Copy the key (starts with `re_`)

### Step 3: Set Up a Sending Domain (Optional but Recommended)
For production, you should verify a domain so emails come from your address:
1. Go to https://resend.com/domains
2. Add your domain: **ncroofingservice.com**
3. Add the DNS records they provide
4. Once verified, you can send from any @ncroofingservice.com address

### Step 4: Add Environment Variables
Add these to your `.env.local` file (and in Vercel dashboard for production):

```
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=leads@ncroofingservice.com
LEAD_NOTIFICATION_EMAIL=info@ncroofingservice.com
```

Notes:
- `RESEND_FROM_EMAIL`: The "from" address (must be verified domain or use onboarding@resend.dev for testing)
- `LEAD_NOTIFICATION_EMAIL`: Where lead notifications are sent (currently set to info@ncroofingservice.com)

---

## 2. Google Sheets Logging

This creates a backup log of all leads in a spreadsheet.

### Step 1: Create a Google Sheet
1. Go to https://sheets.google.com
2. Create a new spreadsheet
3. Name it "NC Roofing Service Leads" (or similar)
4. Add these headers in Row 1:
   ```
   Lead ID | Timestamp | Lead Type | Routing Tag | Name | Phone | Email | Address | City | State | Issue Type | Roof Type | Roof Age | Description | Preferred Date | Preferred Time | Notes | Storm Risk | Urgency | Source
   ```

### Step 2: Create a Google Apps Script
1. In your spreadsheet, click Extensions > Apps Script
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Append row with lead data
    sheet.appendRow([
      data.leadId || '',
      data.timestamp || new Date().toISOString(),
      data.leadType || '',
      data.routingTag || '',
      data.name || '',
      data.phone || '',
      data.email || '',
      data.address || '',
      data.city || '',
      data.state || '',
      data.issueType || '',
      data.roofType || '',
      data.roofAge || '',
      data.description || '',
      data.preferredDate || '',
      data.preferredTime || '',
      data.notes || '',
      data.stormRisk || '',
      data.urgency || '',
      data.source || 'website'
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the Save icon (or Ctrl+S)
5. Name the project "Lead Logger"

### Step 3: Deploy as Web App
1. Click Deploy > New Deployment
2. Click the gear icon next to "Select type" and choose "Web app"
3. Settings:
   - Description: "Lead capture webhook"
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click Deploy
5. Authorize the app when prompted
6. Copy the Web App URL (looks like: `https://script.google.com/macros/s/xxx.../exec`)

### Step 4: Add Environment Variable
Add to your `.env.local` file (and Vercel):

```
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/your_script_id/exec
```

---

## 3. Add Variables to Vercel

For production, add these environment variables in Vercel:

1. Go to your project at https://vercel.com
2. Click Settings > Environment Variables
3. Add each variable:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `LEAD_NOTIFICATION_EMAIL`
   - `GOOGLE_SHEETS_WEBHOOK_URL`
4. Redeploy for changes to take effect

---

## 4. Test the Setup

After configuration:

1. Go to your website's storm check page
2. Enter an address and check for storms
3. Fill out the schedule inspection form
4. Check:
   - Did you receive an email?
   - Did a row appear in Google Sheets?

If not working, check:
- Vercel logs (Functions tab) for errors
- That environment variables are set correctly
- That the Google Apps Script is deployed as "Anyone" can access

---

## Lead Types

The system captures these lead types:

| Type | Source | Priority |
|------|--------|----------|
| `estimate` | Quote request forms | Normal |
| `schedule` | Schedule inspection forms | Normal |
| `triage` | Problem finder tool | Based on issue |
| `storm-check` | Storm damage check page | Based on risk level |

High-priority leads (leaks, high storm risk) are tagged and the email subject includes 🚨

---

## Questions?

Contact your developer for help with setup or customization.





