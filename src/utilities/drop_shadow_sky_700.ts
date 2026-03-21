/**
 * --tw-drop-shadow-color: oklch(50% 0.134 242.749);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-sky-700) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_sky_700 = () => `
    --tw-drop-shadow-color: oklch(50% 0.134 242.749);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-sky-700) var(--tw-drop-shadow-alpha), transparent);
    `;
