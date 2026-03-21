/**
 * --tw-drop-shadow-color: oklch(59.1% 0.293 322.896);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-fuchsia-600) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_fuchsia_600 = () => `
    --tw-drop-shadow-color: oklch(59.1% 0.293 322.896);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-fuchsia-600) var(--tw-drop-shadow-alpha), transparent);
    `;
