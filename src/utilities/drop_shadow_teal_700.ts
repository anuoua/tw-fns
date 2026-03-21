/**
 * --tw-drop-shadow-color: oklch(51.1% 0.096 186.391);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-700) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_teal_700 = () => `
    --tw-drop-shadow-color: oklch(51.1% 0.096 186.391);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-700) var(--tw-drop-shadow-alpha), transparent);
    `;
