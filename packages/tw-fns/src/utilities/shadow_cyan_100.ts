/**
 * --tw-shadow-color: oklch(95.6% 0.045 203.388);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-cyan-100) var(--tw-shadow-alpha), transparent);
 */
export const shadow_cyan_100 = () => `
    --tw-shadow-color: oklch(95.6% 0.045 203.388);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-cyan-100) var(--tw-shadow-alpha), transparent);
    `;
