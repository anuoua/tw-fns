/**
 * --tw-text-shadow-color: oklch(29.3% 0.136 325.661);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-950) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_fuchsia_950 = () => `
    --tw-text-shadow-color: oklch(29.3% 0.136 325.661);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-950) var(--tw-text-shadow-alpha), transparent);
    `;
