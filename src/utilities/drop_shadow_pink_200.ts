/**
 * --tw-drop-shadow-color: oklch(89.9% 0.061 343.231);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-pink-200) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_pink_200 = () => `
    --tw-drop-shadow-color: oklch(89.9% 0.061 343.231);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-pink-200) var(--tw-drop-shadow-alpha), transparent);
    `;
