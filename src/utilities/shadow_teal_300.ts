/**
 * --tw-shadow-color: oklch(85.5% 0.138 181.071);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-teal-300) var(--tw-shadow-alpha), transparent);
 */
export const shadow_teal_300 = () => `
    --tw-shadow-color: oklch(85.5% 0.138 181.071);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-teal-300) var(--tw-shadow-alpha), transparent);
    `;
