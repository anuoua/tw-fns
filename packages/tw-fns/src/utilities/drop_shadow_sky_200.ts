/**
 * --tw-drop-shadow-color: oklch(90.1% 0.058 230.902);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-sky-200) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_sky_200 = () => `
    --tw-drop-shadow-color: oklch(90.1% 0.058 230.902);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-sky-200) var(--tw-drop-shadow-alpha), transparent);
    `;
