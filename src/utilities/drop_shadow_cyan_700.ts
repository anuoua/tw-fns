/**
 * --tw-drop-shadow-color: oklch(52% 0.105 223.128);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-cyan-700) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_cyan_700 = () => `
    --tw-drop-shadow-color: oklch(52% 0.105 223.128);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-cyan-700) var(--tw-drop-shadow-alpha), transparent);
    `;
