/**
 * --tw-shadow-color: oklch(20.8% 0.042 265.755);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-slate-900) var(--tw-shadow-alpha), transparent);
 */
export const shadow_slate_900 = () => `
    --tw-shadow-color: oklch(20.8% 0.042 265.755);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-slate-900) var(--tw-shadow-alpha), transparent);
    `;
