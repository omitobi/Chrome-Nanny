#### Nanny for Google Chrome
This project contains the code for Chrome Nanny.

#### Warning
In case this is needed in manifest.json:
- "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'"
- https://developer.chrome.com/extensions/contentSecurityPolicy#relaxing-eval

> However, we strongly recommend against doing this. These functions are notorious XSS attack vectors.
