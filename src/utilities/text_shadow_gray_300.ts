/**
 * --tw-text-shadow-color: oklch(87.2% 0.01 258.338);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-gray-300) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_gray_300 = () => `
    --tw-text-shadow-color: oklch(87.2% 0.01 258.338);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-gray-300) var(--tw-text-shadow-alpha), transparent);
    `;
