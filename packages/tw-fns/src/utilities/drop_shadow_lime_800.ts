/**
 * --tw-drop-shadow-color: oklch(45.3% 0.124 130.933);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-lime-800) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_lime_800 = () => `
    --tw-drop-shadow-color: oklch(45.3% 0.124 130.933);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-lime-800) var(--tw-drop-shadow-alpha), transparent);
    `;
