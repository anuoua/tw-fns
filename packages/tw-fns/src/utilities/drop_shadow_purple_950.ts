/**
 * --tw-drop-shadow-color: oklch(29.1% 0.149 302.717);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-purple-950) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_purple_950 = () => `
    --tw-drop-shadow-color: oklch(29.1% 0.149 302.717);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-purple-950) var(--tw-drop-shadow-alpha), transparent);
    `;
