/**
 * --tw-drop-shadow-color: oklch(42.4% 0.199 265.638);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-blue-800) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_blue_800 = () => `
    --tw-drop-shadow-color: oklch(42.4% 0.199 265.638);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-blue-800) var(--tw-drop-shadow-alpha), transparent);
    `;
