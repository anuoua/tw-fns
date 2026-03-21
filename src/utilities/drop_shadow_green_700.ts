/**
 * --tw-drop-shadow-color: oklch(52.7% 0.154 150.069);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-green-700) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_green_700 = () => `
    --tw-drop-shadow-color: oklch(52.7% 0.154 150.069);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-green-700) var(--tw-drop-shadow-alpha), transparent);
    `;
