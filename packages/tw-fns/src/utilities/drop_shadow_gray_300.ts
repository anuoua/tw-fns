/**
 * --tw-drop-shadow-color: oklch(87.2% 0.01 258.338);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-300) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_gray_300 = () => `
    --tw-drop-shadow-color: oklch(87.2% 0.01 258.338);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-300) var(--tw-drop-shadow-alpha), transparent);
    `;
