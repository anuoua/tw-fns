/**
 * --tw-inset-shadow-color: oklch(27.9% 0.041 260.031);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-slate-800) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_slate_800 = () => `
    --tw-inset-shadow-color: oklch(27.9% 0.041 260.031);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-slate-800) var(--tw-inset-shadow-alpha), transparent);
    `;
