/**
 * --tw-shadow-color: oklch(66.7% 0.295 322.15);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-fuchsia-500) var(--tw-shadow-alpha), transparent);
 */
export const shadow_fuchsia_500 = () => `
    --tw-shadow-color: oklch(66.7% 0.295 322.15);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-fuchsia-500) var(--tw-shadow-alpha), transparent);
    `;
