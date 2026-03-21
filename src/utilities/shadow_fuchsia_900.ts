/**
 * --tw-shadow-color: oklch(40.1% 0.17 325.612);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-fuchsia-900) var(--tw-shadow-alpha), transparent);
 */
export const shadow_fuchsia_900 = () => `
    --tw-shadow-color: oklch(40.1% 0.17 325.612);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-fuchsia-900) var(--tw-shadow-alpha), transparent);
    `;
