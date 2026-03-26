/**
 * --tw-drop-shadow-color: oklch(55.4% 0.135 66.442);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-yellow-700) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_yellow_700 = () => `
    --tw-drop-shadow-color: oklch(55.4% 0.135 66.442);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-yellow-700) var(--tw-drop-shadow-alpha), transparent);
    `;
