/**
 * --tw-shadow-color: oklch(27.9% 0.041 260.031);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-slate-800) var(--tw-shadow-alpha), transparent);
 */
export const shadow_slate_800 = () => `
    --tw-shadow-color: oklch(27.9% 0.041 260.031);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-slate-800) var(--tw-shadow-alpha), transparent);
    `;
