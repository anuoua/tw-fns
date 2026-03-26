/**
 * --tw-shadow-color: oklch(90.1% 0.076 70.697);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-orange-200) var(--tw-shadow-alpha), transparent);
 */
export const shadow_orange_200 = () => `
    --tw-shadow-color: oklch(90.1% 0.076 70.697);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-orange-200) var(--tw-shadow-alpha), transparent);
    `;
