/**
 * --tw-shadow-color: oklch(64.6% 0.222 41.116);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-orange-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_orange_600 = () => `
    --tw-shadow-color: oklch(64.6% 0.222 41.116);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-orange-600) var(--tw-shadow-alpha), transparent);
    `;
