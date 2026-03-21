/**
 * --tw-inset-shadow-color: oklch(59.1% 0.293 322.896);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-fuchsia-600) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_fuchsia_600 = () => `
    --tw-inset-shadow-color: oklch(59.1% 0.293 322.896);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-fuchsia-600) var(--tw-inset-shadow-alpha), transparent);
    `;
