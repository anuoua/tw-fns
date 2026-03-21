/**
 * --tw-text-shadow-color: oklch(44.8% 0.119 151.328);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-green-800) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_green_800 = () => `
    --tw-text-shadow-color: oklch(44.8% 0.119 151.328);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-green-800) var(--tw-text-shadow-alpha), transparent);
    `;
