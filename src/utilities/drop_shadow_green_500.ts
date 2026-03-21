/**
 * --tw-drop-shadow-color: oklch(72.3% 0.219 149.579);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-green-500) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_green_500 = () => `
    --tw-drop-shadow-color: oklch(72.3% 0.219 149.579);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-green-500) var(--tw-drop-shadow-alpha), transparent);
    `;
