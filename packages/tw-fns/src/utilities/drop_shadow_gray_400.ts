/**
 * --tw-drop-shadow-color: oklch(70.7% 0.022 261.325);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-400) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_gray_400 = () => `
    --tw-drop-shadow-color: oklch(70.7% 0.022 261.325);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-400) var(--tw-drop-shadow-alpha), transparent);
    `;
