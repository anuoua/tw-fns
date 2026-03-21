/**
 * --tw-drop-shadow-color: oklch(68.5% 0.169 237.323);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-sky-500) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_sky_500 = () => `
    --tw-drop-shadow-color: oklch(68.5% 0.169 237.323);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-sky-500) var(--tw-drop-shadow-alpha), transparent);
    `;
