# NC Roofing Service - Image Assets Guide

This folder contains all images used across the NC Roofing Service website. Images are organized by their use case and location on the site.

---

## 📁 Directory Structure

```
public/images/
├── logos/                    # Company logos (SVG, PNG)
├── heroes/                   # Full-width hero backgrounds
├── services/
│   ├── heroes/              # Service page hero images
│   └── cards/               # Service card thumbnails
├── team/                     # Team member headshots
├── projects/                 # Our Work gallery (before/after)
└── about/                    # About page specific images
```

---

## 🖼️ Image Specifications

### Hero Images (`heroes/` and `services/heroes/`)
- **Dimensions:** 1920 × 1080 pixels (16:9 aspect ratio)
- **Format:** `.jpg` (optimized)
- **File Size:** 200-400 KB max
- **Style:** High-quality photos, works well with dark overlay text

### Service Cards (`services/cards/`)
- **Dimensions:** 800 × 600 pixels (4:3 aspect ratio)
- **Format:** `.jpg`
- **File Size:** 50-100 KB max
- **Style:** Clear subject, works as thumbnail

### Team Headshots (`team/`)
- **Dimensions:** 400 × 400 pixels (1:1 square)
- **Format:** `.jpg`
- **File Size:** 30-50 KB max
- **Style:** Professional headshot, neutral background preferred

### Project Photos (`projects/`)
- **Dimensions:** 800 × 600 pixels (4:3 aspect ratio)
- **Format:** `.jpg`
- **File Size:** 50-100 KB max
- **Style:** Clear before/after documentation shots

---

## 📋 Complete Image Manifest

### Heroes (Full-Width Backgrounds)

| Filename | Used On | Description |
|----------|---------|-------------|
| `home-hero-1920x1080.jpg` | Homepage | Aerial roof view or beautiful house |
| `services-hero-1920x1080.jpg` | Services Index | Roofing work in progress |
| `about-hero-1920x1080.jpg` | About Us | Construction/team at work |
| `contact-hero-1920x1080.jpg` | Contact | Beautiful house exterior |
| `locations-hero-1920x1080.jpg` | Locations Index | NC neighborhood/skyline |
| `location-city-hero-1920x1080.jpg` | City Pages | Generic house exterior |
| `start-hero-1920x1080.jpg` | Start Here | Roofer working on roof |
| `storm-check-hero-1920x1080.jpg` | Storm Check | Storm clouds or damage |
| `our-work-hero-1920x1080.jpg` | Our Work | Completed beautiful roof |

### Service Page Heroes (`services/heroes/`)

| Filename | Used On | Description |
|----------|---------|-------------|
| `roof-repair-hero-1920x1080.jpg` | Roof Repair | Roofer repairing shingles |
| `roof-replacement-hero-1920x1080.jpg` | Roof Replacement | New roof installation |
| `storm-damage-hero-1920x1080.jpg` | Storm Damage | Storm clouds or hail damage |
| `fortified-hero-1920x1080.jpg` | FORTIFIED Roofing | Strong, secure house |
| `gutters-hero-1920x1080.jpg` | Gutters | Gutter system close-up |
| `soffit-fascia-hero-1920x1080.jpg` | Soffit & Fascia | Roof edge/eaves detail |
| `pergolas-hero-1920x1080.jpg` | Pergolas | Beautiful outdoor pergola |
| `siding-hero-1920x1080.jpg` | Siding | House with nice siding |

### Service Cards (`services/cards/`)

| Filename | Used On | Description |
|----------|---------|-------------|
| `gutters-card-800x600.jpg` | Services Index | Gutter close-up |
| `pergolas-card-800x600.jpg` | Services Index, Pergolas | Wooden pergola structure |
| `soffit-fascia-card-800x600.jpg` | Services Index | House eaves/roofline |
| `deck-roof-card-800x600.jpg` | Pergolas Page | Covered deck/porch |
| `covered-patio-card-800x600.jpg` | Pergolas Page | Covered patio area |
| `vinyl-siding-card-800x600.jpg` | Siding Page | Vinyl siding example |
| `fiber-cement-card-800x600.jpg` | Siding Page | Fiber cement siding |
| `wood-siding-card-800x600.jpg` | Siding Page | Wood siding example |

### Team Headshots (`team/`)

| Filename | Person | Role / Region |
|----------|--------|----------------|
| `randy-north-400x400.jpg` | Randy Butler | Owner — Greater Durham + Chapel Hill |
| `marvin-granville-400x400.jpg` | Marvin Jackson | Greater Granville (Oxford, Granville County) |
| `mike-east-400x400.jpg` | Mike Villarroel | Greater Raleigh (Wake County) |
| `bill-operations-400x400.jpg` | Bill Lloyd | Operating Partner |
| `makenzie-operations-400x400.jpg` | Makenzie Flack | Operations |
| `max-drone-400x400.jpg` | Max | Drone / Field operator (reserved) |

### Project Gallery (`projects/`)

Each project needs a BEFORE and AFTER photo pair:

| Project | Before Image | After Image |
|---------|--------------|-------------|
| Durham Replacement | `durham-replacement-before-800x600.jpg` | `durham-replacement-after-800x600.jpg` |
| Cary Storm Damage | `cary-storm-before-800x600.jpg` | `cary-storm-after-800x600.jpg` |
| Chapel Hill FORTIFIED | `chapel-hill-fortified-before-800x600.jpg` | `chapel-hill-fortified-after-800x600.jpg` |
| Raleigh Metal Roof | `raleigh-metal-before-800x600.jpg` | `raleigh-metal-after-800x600.jpg` |
| Apex Commercial | `apex-commercial-before-800x600.jpg` | `apex-commercial-after-800x600.jpg` |
| Wake Forest Repair | `wake-forest-repair-before-800x600.jpg` | `wake-forest-repair-after-800x600.jpg` |

### About Page (`about/`)

| Filename | Description |
|----------|-------------|
| `team-jobsite-800x600.jpg` | Team working together on a job site |

---

## 🔄 How to Replace Images

### Step 1: Prepare Your Image
1. Resize to the correct dimensions (see specifications above)
2. Optimize for web (use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/))
3. Save as `.jpg` with quality 80-85%

### Step 2: Name Your File
Follow the naming convention:
```
[descriptive-name]-[width]x[height].jpg
```

Examples:
- ✅ `roof-repair-hero-1920x1080.jpg`
- ✅ `gutters-card-800x600.jpg`
- ❌ `IMG_20231215_143022.jpg`
- ❌ `new roof photo.JPG`

### Step 3: Replace the File
1. Navigate to the correct folder
2. Replace the existing file with your new one (keep the same filename)
3. The website will automatically use the new image

### Step 4: Clear Cache (if needed)
If the old image still shows:
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Or clear browser cache

---

## 🛠️ Image Optimization Tips

### Recommended Tools
- **[Squoosh](https://squoosh.app/)** - Free, browser-based, excellent quality
- **[TinyPNG](https://tinypng.com/)** - Great for batch optimization
- **[ImageOptim](https://imageoptim.com/)** - Mac app, drag-and-drop

### Quality Settings
- Heroes: 80-85% quality (balance size vs quality)
- Cards: 80% quality
- Headshots: 85% quality (faces need more detail)

### File Size Targets
| Type | Max Size |
|------|----------|
| Hero (1920×1080) | 400 KB |
| Card (800×600) | 100 KB |
| Headshot (400×400) | 50 KB |

---

## ⚠️ Important Notes

1. **Keep filenames exactly as documented** - The code references these exact filenames
2. **Maintain aspect ratios** - Don't stretch or distort images
3. **Use high-quality source images** - Start with the largest version available
4. **Test on mobile** - Ensure images look good on small screens
5. **Backup before replacing** - Keep copies of original images

---

## 📞 Need Help?

Contact your web developer if you need to:
- Add new image locations
- Change image dimensions
- Update the code to use different filenames

---

*Last Updated: December 2024*





