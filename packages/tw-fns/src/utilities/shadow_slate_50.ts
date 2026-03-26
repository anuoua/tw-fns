/**
 * --tw-shadow-color: oklch(98.4% 0.003 247.858);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-slate-50) var(--tw-shadow-alpha), transparent);
 */
export const shadow_slate_50 = () => `
    --tw-shadow-color: oklch(98.4% 0.003 247.858);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-slate-50) var(--tw-shadow-alpha), transparent);
    `;
