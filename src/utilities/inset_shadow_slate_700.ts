/**
 * --tw-inset-shadow-color: oklch(37.2% 0.044 257.287);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-slate-700) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_slate_700 = () => `
    --tw-inset-shadow-color: oklch(37.2% 0.044 257.287);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-slate-700) var(--tw-inset-shadow-alpha), transparent);
    `;
