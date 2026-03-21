/**
 * --tw-drop-shadow-color: oklch(27.8% 0.033 256.848);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-800) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_gray_800 = () => `
    --tw-drop-shadow-color: oklch(27.8% 0.033 256.848);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-800) var(--tw-drop-shadow-alpha), transparent);
    `;
