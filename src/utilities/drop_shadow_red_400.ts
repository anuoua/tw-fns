/**
 * --tw-drop-shadow-color: oklch(70.4% 0.191 22.216);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-400) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_red_400 = () => `
    --tw-drop-shadow-color: oklch(70.4% 0.191 22.216);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-400) var(--tw-drop-shadow-alpha), transparent);
    `;
