/**
 * --tw-text-shadow-color: oklch(45.2% 0.211 324.591);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-800) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_fuchsia_800 = () => `
    --tw-text-shadow-color: oklch(45.2% 0.211 324.591);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-800) var(--tw-text-shadow-alpha), transparent);
    `;
