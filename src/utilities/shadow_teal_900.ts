/**
 * --tw-shadow-color: oklch(38.6% 0.063 188.416);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-teal-900) var(--tw-shadow-alpha), transparent);
 */
export const shadow_teal_900 = () => `
    --tw-shadow-color: oklch(38.6% 0.063 188.416);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-teal-900) var(--tw-shadow-alpha), transparent);
    `;
