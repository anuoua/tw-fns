/**
 * --tw-drop-shadow-color: oklch(90.2% 0.063 306.703);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-purple-200) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_purple_200 = () => `
    --tw-drop-shadow-color: oklch(90.2% 0.063 306.703);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-purple-200) var(--tw-drop-shadow-alpha), transparent);
    `;
