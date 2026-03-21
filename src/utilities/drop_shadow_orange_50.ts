/**
 * --tw-drop-shadow-color: oklch(98% 0.016 73.684);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-orange-50) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_orange_50 = () => `
    --tw-drop-shadow-color: oklch(98% 0.016 73.684);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-orange-50) var(--tw-drop-shadow-alpha), transparent);
    `;
