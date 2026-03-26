/**
 * --tw-text-shadow-color: oklch(39.3% 0.095 152.535);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-green-900) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_green_900 = () => `
    --tw-text-shadow-color: oklch(39.3% 0.095 152.535);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-green-900) var(--tw-text-shadow-alpha), transparent);
    `;
