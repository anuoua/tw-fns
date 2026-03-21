/**
 * --tw-drop-shadow-color: oklch(54.6% 0.245 262.881);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-blue-600) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_blue_600 = () => `
    --tw-drop-shadow-color: oklch(54.6% 0.245 262.881);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-blue-600) var(--tw-drop-shadow-alpha), transparent);
    `;
