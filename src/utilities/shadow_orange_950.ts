/**
 * --tw-shadow-color: oklch(26.6% 0.079 36.259);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-orange-950) var(--tw-shadow-alpha), transparent);
 */
export const shadow_orange_950 = () => `
    --tw-shadow-color: oklch(26.6% 0.079 36.259);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-orange-950) var(--tw-shadow-alpha), transparent);
    `;
