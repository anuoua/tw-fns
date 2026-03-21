/**
 * --tw-drop-shadow-color: oklch(29.3% 0.066 243.157);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-sky-950) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_sky_950 = () => `
    --tw-drop-shadow-color: oklch(29.3% 0.066 243.157);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-sky-950) var(--tw-drop-shadow-alpha), transparent);
    `;
