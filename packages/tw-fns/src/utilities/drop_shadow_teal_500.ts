/**
 * --tw-drop-shadow-color: oklch(70.4% 0.14 182.503);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-500) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_teal_500 = () => `
    --tw-drop-shadow-color: oklch(70.4% 0.14 182.503);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-500) var(--tw-drop-shadow-alpha), transparent);
    `;
