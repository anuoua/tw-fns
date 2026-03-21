/**
 * --tw-drop-shadow-color: oklch(87.1% 0.15 154.449);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-green-300) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_green_300 = () => `
    --tw-drop-shadow-color: oklch(87.1% 0.15 154.449);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-green-300) var(--tw-drop-shadow-alpha), transparent);
    `;
