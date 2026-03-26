/**
 * --tw-drop-shadow-color: oklch(88.5% 0.062 18.334);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-200) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_red_200 = () => `
    --tw-drop-shadow-color: oklch(88.5% 0.062 18.334);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-200) var(--tw-drop-shadow-alpha), transparent);
    `;
