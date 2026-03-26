/**
 * --tw-drop-shadow-color: oklch(75% 0.183 55.934);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-orange-400) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_orange_400 = () => `
    --tw-drop-shadow-color: oklch(75% 0.183 55.934);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-orange-400) var(--tw-drop-shadow-alpha), transparent);
    `;
