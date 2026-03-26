/**
 * --tw-drop-shadow-color: oklch(55.3% 0.195 38.402);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-orange-700) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_orange_700 = () => `
    --tw-drop-shadow-color: oklch(55.3% 0.195 38.402);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-orange-700) var(--tw-drop-shadow-alpha), transparent);
    `;
