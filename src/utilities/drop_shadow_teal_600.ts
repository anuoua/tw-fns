/**
 * --tw-drop-shadow-color: oklch(60% 0.118 184.704);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-600) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_teal_600 = () => `
    --tw-drop-shadow-color: oklch(60% 0.118 184.704);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-600) var(--tw-drop-shadow-alpha), transparent);
    `;
