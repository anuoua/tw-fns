/**
 * --tw-drop-shadow-color: oklch(68.1% 0.162 75.834);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-yellow-600) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_yellow_600 = () => `
    --tw-drop-shadow-color: oklch(68.1% 0.162 75.834);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-yellow-600) var(--tw-drop-shadow-alpha), transparent);
    `;
