/**
 * --tw-text-shadow-color: oklch(53.2% 0.157 131.589);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-lime-700) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_lime_700 = () => `
    --tw-text-shadow-color: oklch(53.2% 0.157 131.589);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-lime-700) var(--tw-text-shadow-alpha), transparent);
    `;
