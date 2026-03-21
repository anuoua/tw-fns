/**
 * --tw-drop-shadow-color: oklch(28.6% 0.066 53.813);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-yellow-950) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_yellow_950 = () => `
    --tw-drop-shadow-color: oklch(28.6% 0.066 53.813);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-yellow-950) var(--tw-drop-shadow-alpha), transparent);
    `;
