/**
 * --tw-drop-shadow-color: oklch(37.9% 0.146 265.522);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-blue-900) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_blue_900 = () => `
    --tw-drop-shadow-color: oklch(37.9% 0.146 265.522);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-blue-900) var(--tw-drop-shadow-alpha), transparent);
    `;
