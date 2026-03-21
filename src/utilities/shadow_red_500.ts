/**
 * --tw-shadow-color: oklch(63.7% 0.237 25.331);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-red-500) var(--tw-shadow-alpha), transparent);
 */
export const shadow_red_500 = () => `
    --tw-shadow-color: oklch(63.7% 0.237 25.331);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-red-500) var(--tw-shadow-alpha), transparent);
    `;
