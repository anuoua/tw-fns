/**
 * --tw-text-shadow-color: oklch(40.1% 0.17 325.612);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-900) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_fuchsia_900 = () => `
    --tw-text-shadow-color: oklch(40.1% 0.17 325.612);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-900) var(--tw-text-shadow-alpha), transparent);
    `;
