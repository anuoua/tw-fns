/**
 * --tw-drop-shadow-color: oklch(85.2% 0.199 91.936);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-yellow-400) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_yellow_400 = () => `
    --tw-drop-shadow-color: oklch(85.2% 0.199 91.936);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-yellow-400) var(--tw-drop-shadow-alpha), transparent);
    `;
