/**
 * --tw-text-shadow-color: oklch(59.1% 0.293 322.896);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-600) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_fuchsia_600 = () => `
    --tw-text-shadow-color: oklch(59.1% 0.293 322.896);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-600) var(--tw-text-shadow-alpha), transparent);
    `;
