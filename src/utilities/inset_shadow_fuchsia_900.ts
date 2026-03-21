/**
 * --tw-inset-shadow-color: oklch(40.1% 0.17 325.612);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-fuchsia-900) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_fuchsia_900 = () => `
    --tw-inset-shadow-color: oklch(40.1% 0.17 325.612);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-fuchsia-900) var(--tw-inset-shadow-alpha), transparent);
    `;
