/**
 * --tw-text-shadow-color: oklch(37.2% 0.044 257.287);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-700) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_slate_700 = () => `
    --tw-text-shadow-color: oklch(37.2% 0.044 257.287);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-700) var(--tw-text-shadow-alpha), transparent);
    `;
