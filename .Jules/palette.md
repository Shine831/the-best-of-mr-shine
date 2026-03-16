# Palette's Journal - Critical Learnings Only

Format: ## YYYY-MM-DD - [Title]
**Learning:** [UX/a11y insight]
**Action:** [How to apply next time]

## 2025-03-16 - Mobile Menu Accessibility Pattern
**Learning:** For full-screen mobile menu overlays, the toggle button should have `aria-expanded` and `aria-controls` to link it to the menu container, and the menu container itself should be marked with `role="dialog"` and `aria-modal="true"` to communicate its nature to screen readers.
**Action:** Always implement these attributes when creating or refactoring mobile navigation overlays.
