/**
 * --tw-drop-shadow-color: oklch(39.6% 0.141 25.723);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-900) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_red_900 = () => `
    --tw-drop-shadow-color: oklch(39.6% 0.141 25.723);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-900) var(--tw-drop-shadow-alpha), transparent);
    `;
