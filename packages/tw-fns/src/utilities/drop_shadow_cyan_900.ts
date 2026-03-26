/**
 * --tw-drop-shadow-color: oklch(39.8% 0.07 227.392);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-cyan-900) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_cyan_900 = () => `
    --tw-drop-shadow-color: oklch(39.8% 0.07 227.392);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-cyan-900) var(--tw-drop-shadow-alpha), transparent);
    `;
