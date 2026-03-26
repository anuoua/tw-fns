/**
 * --tw-drop-shadow-color: oklch(69.6% 0.17 162.48);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-emerald-500) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_emerald_500 = () => `
    --tw-drop-shadow-color: oklch(69.6% 0.17 162.48);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-emerald-500) var(--tw-drop-shadow-alpha), transparent);
    `;
