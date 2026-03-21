/**
 * --tw-text-shadow-color: oklch(96.8% 0.007 247.896);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-100) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_slate_100 = () => `
    --tw-text-shadow-color: oklch(96.8% 0.007 247.896);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-100) var(--tw-text-shadow-alpha), transparent);
    `;
