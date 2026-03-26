/**
 * --tw-inset-shadow-color: oklch(95.6% 0.045 203.388);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-cyan-100) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_cyan_100 = () => `
    --tw-inset-shadow-color: oklch(95.6% 0.045 203.388);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-cyan-100) var(--tw-inset-shadow-alpha), transparent);
    `;
