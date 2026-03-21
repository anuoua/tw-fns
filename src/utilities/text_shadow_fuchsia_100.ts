/**
 * --tw-text-shadow-color: oklch(95.2% 0.037 318.852);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-100) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_fuchsia_100 = () => `
    --tw-text-shadow-color: oklch(95.2% 0.037 318.852);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-100) var(--tw-text-shadow-alpha), transparent);
    `;
