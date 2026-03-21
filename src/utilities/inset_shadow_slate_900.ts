/**
 * --tw-inset-shadow-color: oklch(20.8% 0.042 265.755);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-slate-900) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_slate_900 = () => `
    --tw-inset-shadow-color: oklch(20.8% 0.042 265.755);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-slate-900) var(--tw-inset-shadow-alpha), transparent);
    `;
