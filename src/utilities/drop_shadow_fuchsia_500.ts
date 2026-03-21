/**
 * --tw-drop-shadow-color: oklch(66.7% 0.295 322.15);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-fuchsia-500) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_fuchsia_500 = () => `
    --tw-drop-shadow-color: oklch(66.7% 0.295 322.15);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-fuchsia-500) var(--tw-drop-shadow-alpha), transparent);
    `;
