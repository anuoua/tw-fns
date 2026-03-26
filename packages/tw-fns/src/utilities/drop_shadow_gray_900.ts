/**
 * --tw-drop-shadow-color: oklch(21% 0.034 264.665);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-900) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_gray_900 = () => `
    --tw-drop-shadow-color: oklch(21% 0.034 264.665);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-gray-900) var(--tw-drop-shadow-alpha), transparent);
    `;
