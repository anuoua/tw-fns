/**
 * --tw-shadow-color: oklch(45.2% 0.211 324.591);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-fuchsia-800) var(--tw-shadow-alpha), transparent);
 */
export const shadow_fuchsia_800 = () => `
    --tw-shadow-color: oklch(45.2% 0.211 324.591);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-fuchsia-800) var(--tw-shadow-alpha), transparent);
    `;
