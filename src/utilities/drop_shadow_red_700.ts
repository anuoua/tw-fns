/**
 * --tw-drop-shadow-color: oklch(50.5% 0.213 27.518);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-700) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_red_700 = () => `
    --tw-drop-shadow-color: oklch(50.5% 0.213 27.518);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-700) var(--tw-drop-shadow-alpha), transparent);
    `;
