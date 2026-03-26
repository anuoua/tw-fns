/**
 * --tw-drop-shadow-color: oklch(83.7% 0.128 66.29);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-orange-300) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_orange_300 = () => `
    --tw-drop-shadow-color: oklch(83.7% 0.128 66.29);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-orange-300) var(--tw-drop-shadow-alpha), transparent);
    `;
