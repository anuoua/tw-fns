/**
 * --tw-drop-shadow-color: oklch(88.2% 0.059 254.128);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-blue-200) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_blue_200 = () => `
    --tw-drop-shadow-color: oklch(88.2% 0.059 254.128);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-blue-200) var(--tw-drop-shadow-alpha), transparent);
    `;
