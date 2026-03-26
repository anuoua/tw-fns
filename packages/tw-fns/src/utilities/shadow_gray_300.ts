/**
 * --tw-shadow-color: oklch(87.2% 0.01 258.338);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-gray-300) var(--tw-shadow-alpha), transparent);
 */
export const shadow_gray_300 = () => `
    --tw-shadow-color: oklch(87.2% 0.01 258.338);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-gray-300) var(--tw-shadow-alpha), transparent);
    `;
