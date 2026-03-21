/**
 * --tw-shadow-color: oklch(59.1% 0.293 322.896);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-fuchsia-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_fuchsia_600 = () => `
    --tw-shadow-color: oklch(59.1% 0.293 322.896);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-fuchsia-600) var(--tw-shadow-alpha), transparent);
    `;
