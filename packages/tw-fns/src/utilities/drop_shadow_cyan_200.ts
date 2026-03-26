/**
 * --tw-drop-shadow-color: oklch(91.7% 0.08 205.041);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-cyan-200) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_cyan_200 = () => `
    --tw-drop-shadow-color: oklch(91.7% 0.08 205.041);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-cyan-200) var(--tw-drop-shadow-alpha), transparent);
    `;
