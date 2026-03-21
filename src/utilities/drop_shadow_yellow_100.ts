/**
 * --tw-drop-shadow-color: oklch(97.3% 0.071 103.193);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-yellow-100) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_yellow_100 = () => `
    --tw-drop-shadow-color: oklch(97.3% 0.071 103.193);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-yellow-100) var(--tw-drop-shadow-alpha), transparent);
    `;
