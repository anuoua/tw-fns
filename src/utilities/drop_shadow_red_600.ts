/**
 * --tw-drop-shadow-color: oklch(57.7% 0.245 27.325);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-600) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_red_600 = () => `
    --tw-drop-shadow-color: oklch(57.7% 0.245 27.325);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-600) var(--tw-drop-shadow-alpha), transparent);
    `;
