/**
 * --tw-drop-shadow-color: oklch(39.3% 0.095 152.535);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-green-900) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_green_900 = () => `
    --tw-drop-shadow-color: oklch(39.3% 0.095 152.535);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-green-900) var(--tw-drop-shadow-alpha), transparent);
    `;
