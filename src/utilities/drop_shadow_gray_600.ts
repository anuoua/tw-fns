/**
 * --tw-drop-shadow-color: oklch(44.6% 0.03 256.802);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-600) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_gray_600 = () => `
    --tw-drop-shadow-color: oklch(44.6% 0.03 256.802);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-600) var(--tw-drop-shadow-alpha), transparent);
    `;
