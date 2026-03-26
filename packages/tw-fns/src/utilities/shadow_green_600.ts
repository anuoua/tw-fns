/**
 * --tw-shadow-color: oklch(62.7% 0.194 149.214);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-green-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_green_600 = () => `
    --tw-shadow-color: oklch(62.7% 0.194 149.214);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-green-600) var(--tw-shadow-alpha), transparent);
    `;
