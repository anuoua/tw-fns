/**
 * --tw-text-shadow-color: oklch(20.8% 0.042 265.755);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-900) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_slate_900 = () => `
    --tw-text-shadow-color: oklch(20.8% 0.042 265.755);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-900) var(--tw-text-shadow-alpha), transparent);
    `;
