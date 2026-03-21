/**
 * --tw-drop-shadow-color: oklch(94.5% 0.129 101.54);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-yellow-200) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_yellow_200 = () => `
    --tw-drop-shadow-color: oklch(94.5% 0.129 101.54);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-yellow-200) var(--tw-drop-shadow-alpha), transparent);
    `;
