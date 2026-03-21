/**
 * --tw-shadow-color: oklch(51.8% 0.253 323.949);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-fuchsia-700) var(--tw-shadow-alpha), transparent);
 */
export const shadow_fuchsia_700 = () => `
    --tw-shadow-color: oklch(51.8% 0.253 323.949);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-fuchsia-700) var(--tw-shadow-alpha), transparent);
    `;
