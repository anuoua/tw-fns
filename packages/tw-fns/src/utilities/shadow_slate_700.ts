/**
 * --tw-shadow-color: oklch(37.2% 0.044 257.287);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-slate-700) var(--tw-shadow-alpha), transparent);
 */
export const shadow_slate_700 = () => `
    --tw-shadow-color: oklch(37.2% 0.044 257.287);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-slate-700) var(--tw-shadow-alpha), transparent);
    `;
