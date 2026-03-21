/**
 * --tw-drop-shadow-color: oklch(30.2% 0.056 229.695);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-cyan-950) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_cyan_950 = () => `
    --tw-drop-shadow-color: oklch(30.2% 0.056 229.695);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-cyan-950) var(--tw-drop-shadow-alpha), transparent);
    `;
