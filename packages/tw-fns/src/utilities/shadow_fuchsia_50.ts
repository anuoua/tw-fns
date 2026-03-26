/**
 * --tw-shadow-color: oklch(97.7% 0.017 320.058);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-fuchsia-50) var(--tw-shadow-alpha), transparent);
 */
export const shadow_fuchsia_50 = () => `
    --tw-shadow-color: oklch(97.7% 0.017 320.058);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-fuchsia-50) var(--tw-shadow-alpha), transparent);
    `;
