/**
 * --tw-text-shadow-color: oklch(95.6% 0.045 203.388);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-cyan-100) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_cyan_100 = () => `
    --tw-text-shadow-color: oklch(95.6% 0.045 203.388);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-cyan-100) var(--tw-text-shadow-alpha), transparent);
    `;
