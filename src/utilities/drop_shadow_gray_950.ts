/**
 * --tw-drop-shadow-color: oklch(13% 0.028 261.692);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-950) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_gray_950 = () => `
    --tw-drop-shadow-color: oklch(13% 0.028 261.692);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-950) var(--tw-drop-shadow-alpha), transparent);
    `;
