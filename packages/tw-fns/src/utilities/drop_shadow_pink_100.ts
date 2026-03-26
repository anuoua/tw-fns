/**
 * --tw-drop-shadow-color: oklch(94.8% 0.028 342.258);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-pink-100) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_pink_100 = () => `
    --tw-drop-shadow-color: oklch(94.8% 0.028 342.258);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-pink-100) var(--tw-drop-shadow-alpha), transparent);
    `;
