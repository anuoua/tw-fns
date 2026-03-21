/**
 * --tw-drop-shadow-color: oklch(97% 0.014 254.604);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-blue-50) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_blue_50 = () => `
    --tw-drop-shadow-color: oklch(97% 0.014 254.604);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-blue-50) var(--tw-drop-shadow-alpha), transparent);
    `;
