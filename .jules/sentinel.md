## 2025-05-15 - Defense-in-Depth Security Headers
**Vulnerability:** Lack of standard security headers (CSP, X-Frame-Options, etc.) and 'X-Powered-By' disclosure.
**Learning:** Next.js allows centralized security header configuration via `next.config.ts`, but third-party integrations (GTM, Firebase) often require specific CSP exceptions like `'unsafe-inline'` and `'unsafe-eval'`.
**Prevention:** Always enforce a strict CSP and disable tech stack disclosure headers as a baseline security measure. Document justifications for any CSP relaxations to facilitate future audits.
