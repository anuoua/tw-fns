/**
 * --tw-drop-shadow-color: oklch(95.1% 0.026 236.824);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-sky-100) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_sky_100 = () => `
    --tw-drop-shadow-color: oklch(95.1% 0.026 236.824);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-sky-100) var(--tw-drop-shadow-alpha), transparent);
    `;
