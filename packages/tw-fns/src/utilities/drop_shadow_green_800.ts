/**
 * --tw-drop-shadow-color: oklch(44.8% 0.119 151.328);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-green-800) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_green_800 = () => `
    --tw-drop-shadow-color: oklch(44.8% 0.119 151.328);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-green-800) var(--tw-drop-shadow-alpha), transparent);
    `;
