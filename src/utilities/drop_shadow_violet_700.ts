/**
 * --tw-drop-shadow-color: oklch(49.1% 0.27 292.581);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-violet-700) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_violet_700 = () => `
    --tw-drop-shadow-color: oklch(49.1% 0.27 292.581);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-violet-700) var(--tw-drop-shadow-alpha), transparent);
    `;
