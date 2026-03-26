/**
 * --tw-drop-shadow-color: oklch(25.8% 0.092 26.042);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-950) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_red_950 = () => `
    --tw-drop-shadow-color: oklch(25.8% 0.092 26.042);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-950) var(--tw-drop-shadow-alpha), transparent);
    `;
