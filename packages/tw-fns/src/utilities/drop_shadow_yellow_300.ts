/**
 * --tw-drop-shadow-color: oklch(90.5% 0.182 98.111);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-yellow-300) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_yellow_300 = () => `
    --tw-drop-shadow-color: oklch(90.5% 0.182 98.111);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-yellow-300) var(--tw-drop-shadow-alpha), transparent);
    `;
