/**
 * --tw-drop-shadow-color: oklch(96.7% 0.067 122.328);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-lime-100) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_lime_100 = () => `
    --tw-drop-shadow-color: oklch(96.7% 0.067 122.328);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-lime-100) var(--tw-drop-shadow-alpha), transparent);
    `;
