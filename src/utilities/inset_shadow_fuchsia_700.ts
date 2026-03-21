/**
 * --tw-inset-shadow-color: oklch(51.8% 0.253 323.949);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-fuchsia-700) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_fuchsia_700 = () => `
    --tw-inset-shadow-color: oklch(51.8% 0.253 323.949);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-fuchsia-700) var(--tw-inset-shadow-alpha), transparent);
    `;
