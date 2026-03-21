/**
 * --tw-drop-shadow-color: oklch(55.1% 0.027 264.364);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-500) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_gray_500 = () => `
    --tw-drop-shadow-color: oklch(55.1% 0.027 264.364);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-500) var(--tw-drop-shadow-alpha), transparent);
    `;
