/**
 * --tw-inset-shadow-color: oklch(95.2% 0.037 318.852);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-fuchsia-100) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_fuchsia_100 = () => `
    --tw-inset-shadow-color: oklch(95.2% 0.037 318.852);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-fuchsia-100) var(--tw-inset-shadow-alpha), transparent);
    `;
