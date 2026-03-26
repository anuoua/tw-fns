/**
 * --tw-drop-shadow-color: oklch(78.9% 0.154 211.53);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-cyan-400) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_cyan_400 = () => `
    --tw-drop-shadow-color: oklch(78.9% 0.154 211.53);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-cyan-400) var(--tw-drop-shadow-alpha), transparent);
    `;
