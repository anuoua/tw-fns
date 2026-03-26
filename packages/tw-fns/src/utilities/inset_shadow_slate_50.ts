/**
 * --tw-inset-shadow-color: oklch(98.4% 0.003 247.858);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-slate-50) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_slate_50 = () => `
    --tw-inset-shadow-color: oklch(98.4% 0.003 247.858);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-slate-50) var(--tw-inset-shadow-alpha), transparent);
    `;
