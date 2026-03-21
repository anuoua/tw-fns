/**
 * --tw-drop-shadow-color: oklch(28.3% 0.141 291.089);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-violet-950) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_violet_950 = () => `
    --tw-drop-shadow-color: oklch(28.3% 0.141 291.089);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-violet-950) var(--tw-drop-shadow-alpha), transparent);
    `;
