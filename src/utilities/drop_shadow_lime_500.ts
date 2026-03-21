/**
 * --tw-drop-shadow-color: oklch(76.8% 0.233 130.85);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-lime-500) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_lime_500 = () => `
    --tw-drop-shadow-color: oklch(76.8% 0.233 130.85);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-lime-500) var(--tw-drop-shadow-alpha), transparent);
    `;
