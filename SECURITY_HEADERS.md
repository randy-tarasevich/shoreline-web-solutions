# Security Headers Configuration

This document outlines the recommended security headers that should be configured at the hosting/deployment platform level. These headers help protect your website from common security vulnerabilities.

## Required Security Headers

### Content-Security-Policy (CSP)
Prevents XSS attacks by controlling which resources can be loaded.

**Recommended Configuration:**
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none';
```

**Note:** Adjust based on your specific needs. If using external services (analytics, CDNs, etc.), add their domains to the appropriate directives.

### X-Frame-Options
Prevents clickjacking attacks by controlling whether the page can be embedded in frames.

**Recommended Configuration:**
```
X-Frame-Options: DENY
```

**Alternative:** Use `SAMEORIGIN` if you need to embed pages in iframes from the same origin.

### X-Content-Type-Options
Prevents MIME type sniffing attacks.

**Recommended Configuration:**
```
X-Content-Type-Options: nosniff
```

### Referrer-Policy
Controls how much referrer information is sent with requests.

**Recommended Configuration:**
```
Referrer-Policy: strict-origin-when-cross-origin
```

**Options:**
- `no-referrer`: Never send referrer
- `same-origin`: Only send referrer for same-origin requests
- `strict-origin-when-cross-origin`: Send full URL for same-origin, origin only for cross-origin HTTPS→HTTPS, nothing for HTTPS→HTTP

### Permissions-Policy (formerly Feature-Policy)
Controls which browser features and APIs can be used.

**Recommended Configuration:**
```
Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=()
```

**Note:** Adjust based on your site's needs. If you need certain features (e.g., camera for video calls), allow them explicitly.

### Strict-Transport-Security (HSTS)
Forces browsers to use HTTPS connections.

**Recommended Configuration (only if using HTTPS):**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

**Warning:** Only enable this if you're committed to HTTPS. Once set, browsers will enforce HTTPS for the specified duration.

## Platform-Specific Configuration

### Netlify
Add to `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=()"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none';"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
```

### Vercel
Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=()"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none';"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        }
      ]
    }
  ]
}
```

### Apache (.htaccess)
Add to `.htaccess`:
```apache
<IfModule mod_headers.c>
    Header set X-Frame-Options "DENY"
    Header set X-Content-Type-Options "nosniff"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    Header set Permissions-Policy "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=()"
    Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none';"
    Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
</IfModule>
```

### Nginx
Add to your server block:
```nginx
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=()" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none';" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

## Testing Security Headers

After configuring headers, test them using:

1. **Browser DevTools:**
   - Open Network tab
   - Check Response Headers for your site

2. **Online Tools:**
   - [SecurityHeaders.com](https://securityheaders.com/)
   - [Mozilla Observatory](https://observatory.mozilla.org/)

3. **Command Line:**
   ```bash
   curl -I https://shorelinewebsolutions.com
   ```

## Important Notes

- **CSP Configuration:** The provided CSP is a starting point. You may need to adjust it based on:
  - External scripts (analytics, chat widgets, etc.)
  - CDN resources
  - Third-party embeds
  
- **HSTS:** Only enable if you're fully committed to HTTPS. Once set, browsers will enforce HTTPS for the specified duration.

- **Testing:** Always test security headers in a staging environment before deploying to production.

## Resources

- [MDN: HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [OWASP: Secure Headers](https://owasp.org/www-project-secure-headers/)
- [Content Security Policy Reference](https://content-security-policy.com/)

