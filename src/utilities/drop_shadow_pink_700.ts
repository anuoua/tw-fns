/**
 * --tw-drop-shadow-color: oklch(52.5% 0.223 3.958);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-pink-700) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_pink_700 = () => `
    --tw-drop-shadow-color: oklch(52.5% 0.223 3.958);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-pink-700) var(--tw-drop-shadow-alpha), transparent);
    `;
