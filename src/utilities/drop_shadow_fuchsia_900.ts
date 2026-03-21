/**
 * --tw-drop-shadow-color: oklch(40.1% 0.17 325.612);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-fuchsia-900) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_fuchsia_900 = () => `
    --tw-drop-shadow-color: oklch(40.1% 0.17 325.612);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-fuchsia-900) var(--tw-drop-shadow-alpha), transparent);
    `;
