/**
 * --tw-drop-shadow-color: oklch(98.5% 0.002 247.839);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-50) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_gray_50 = () => `
    --tw-drop-shadow-color: oklch(98.5% 0.002 247.839);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-50) var(--tw-drop-shadow-alpha), transparent);
    `;
