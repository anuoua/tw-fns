/**
 * --tw-inset-shadow-color: oklch(66.7% 0.295 322.15);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-fuchsia-500) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_fuchsia_500 = () => `
    --tw-inset-shadow-color: oklch(66.7% 0.295 322.15);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-fuchsia-500) var(--tw-inset-shadow-alpha), transparent);
    `;
