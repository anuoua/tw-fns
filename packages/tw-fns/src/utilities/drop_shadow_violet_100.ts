/**
 * --tw-drop-shadow-color: oklch(94.3% 0.029 294.588);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-violet-100) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_violet_100 = () => `
    --tw-drop-shadow-color: oklch(94.3% 0.029 294.588);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-violet-100) var(--tw-drop-shadow-alpha), transparent);
    `;
