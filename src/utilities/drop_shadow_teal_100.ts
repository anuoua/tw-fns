/**
 * --tw-drop-shadow-color: oklch(95.3% 0.051 180.801);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-100) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_teal_100 = () => `
    --tw-drop-shadow-color: oklch(95.3% 0.051 180.801);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-100) var(--tw-drop-shadow-alpha), transparent);
    `;
