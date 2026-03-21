/**
 * --tw-shadow-color: oklch(45.3% 0.124 130.933);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-lime-800) var(--tw-shadow-alpha), transparent);
 */
export const shadow_lime_800 = () => `
    --tw-shadow-color: oklch(45.3% 0.124 130.933);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-lime-800) var(--tw-shadow-alpha), transparent);
    `;
