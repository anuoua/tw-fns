/**
 * --tw-drop-shadow-color: oklch(29.3% 0.136 325.661);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-fuchsia-950) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_fuchsia_950 = () => `
    --tw-drop-shadow-color: oklch(29.3% 0.136 325.661);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-fuchsia-950) var(--tw-drop-shadow-alpha), transparent);
    `;
