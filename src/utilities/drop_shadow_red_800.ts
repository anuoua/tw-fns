/**
 * --tw-drop-shadow-color: oklch(44.4% 0.177 26.899);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-800) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_red_800 = () => `
    --tw-drop-shadow-color: oklch(44.4% 0.177 26.899);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-800) var(--tw-drop-shadow-alpha), transparent);
    `;
