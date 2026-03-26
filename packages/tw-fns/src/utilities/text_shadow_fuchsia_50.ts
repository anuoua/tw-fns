/**
 * --tw-text-shadow-color: oklch(97.7% 0.017 320.058);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-50) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_fuchsia_50 = () => `
    --tw-text-shadow-color: oklch(97.7% 0.017 320.058);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-50) var(--tw-text-shadow-alpha), transparent);
    `;
