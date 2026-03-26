/**
 * --tw-drop-shadow-color: oklch(45.2% 0.211 324.591);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-fuchsia-800) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_fuchsia_800 = () => `
    --tw-drop-shadow-color: oklch(45.2% 0.211 324.591);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-fuchsia-800) var(--tw-drop-shadow-alpha), transparent);
    `;
