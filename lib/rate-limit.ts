interface RateLimitOptions {
  key: string
  windowMs: number
  maxRequests: number
}

interface RateLimitBucket {
  count: number
  resetAt: number
}

const buckets = new Map<string, RateLimitBucket>()

export function clientIpFromHeaders(headers: Headers): string {
  const forwardedFor = headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  return forwardedFor || headers.get('x-real-ip') || 'unknown'
}

export function checkRateLimit({ key, windowMs, maxRequests }: RateLimitOptions) {
  const now = Date.now()
  const bucket = buckets.get(key)

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true, retryAfterSeconds: 0 }
  }

  if (bucket.count >= maxRequests) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000),
    }
  }

  bucket.count += 1
  return { allowed: true, retryAfterSeconds: 0 }
}
