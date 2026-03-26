/**
 * --tw-drop-shadow-color: oklch(92.5% 0.084 155.995);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-green-200) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_green_200 = () => `
    --tw-drop-shadow-color: oklch(92.5% 0.084 155.995);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-green-200) var(--tw-drop-shadow-alpha), transparent);
    `;
