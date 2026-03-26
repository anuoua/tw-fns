/**
 * --tw-text-shadow-color: oklch(51.8% 0.253 323.949);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-700) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_fuchsia_700 = () => `
    --tw-text-shadow-color: oklch(51.8% 0.253 323.949);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-700) var(--tw-text-shadow-alpha), transparent);
    `;
