/**
 * --tw-drop-shadow-color: oklch(59.2% 0.249 0.584);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-pink-600) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_pink_600 = () => `
    --tw-drop-shadow-color: oklch(59.2% 0.249 0.584);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-pink-600) var(--tw-drop-shadow-alpha), transparent);
    `;
