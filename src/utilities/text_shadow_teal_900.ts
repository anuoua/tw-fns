/**
 * --tw-text-shadow-color: oklch(38.6% 0.063 188.416);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-teal-900) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_teal_900 = () => `
    --tw-text-shadow-color: oklch(38.6% 0.063 188.416);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-teal-900) var(--tw-text-shadow-alpha), transparent);
    `;
