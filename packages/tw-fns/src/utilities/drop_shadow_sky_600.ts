/**
 * --tw-drop-shadow-color: oklch(58.8% 0.158 241.966);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-sky-600) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_sky_600 = () => `
    --tw-drop-shadow-color: oklch(58.8% 0.158 241.966);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-sky-600) var(--tw-drop-shadow-alpha), transparent);
    `;
