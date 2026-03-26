/**
 * --tw-drop-shadow-color: oklch(98.4% 0.014 180.72);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-50) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_teal_50 = () => `
    --tw-drop-shadow-color: oklch(98.4% 0.014 180.72);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-50) var(--tw-drop-shadow-alpha), transparent);
    `;
