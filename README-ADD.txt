LIFE CITY - Worker + D1 connection starter

Add these files to the ROOT of the existing GitHub repository:
- wrangler.jsonc
- .assetsignore
- src/index.js

Do not replace or delete the existing index.html, style.css, app.js, or README.txt.

GitHub steps:
1. Open https://github.com/tunaisinbox/LIFECITY
2. Add wrangler.jsonc at the repository root.
3. Add .assetsignore at the repository root (keep the leading dot).
4. Create the src folder and add index.js inside it.
5. Commit the changes to the main branch.
6. Wait for the Cloudflare deployment to finish.

After deployment, visit:
https://lifecity.tunaisinbox.workers.dev/api/health

Expected success response:
{"ok":true,"service":"LIFE CITY API","database":"connected"}

Important:
- This is only a connectivity check, not user registration or login.
- It does not create, delete, or modify database rows.
- The existing frontend files are not modified.
- If deployment fails, do not delete the D1 database or existing site. Share the build/deploy error.
- This config assumes the Worker name is "lifecity", based on the current workers.dev hostname.
