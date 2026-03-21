/**
 * --tw-drop-shadow-color: oklch(51.1% 0.262 276.966);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-indigo-600) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_indigo_600 = () => `
    --tw-drop-shadow-color: oklch(51.1% 0.262 276.966);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-indigo-600) var(--tw-drop-shadow-alpha), transparent);
    `;
