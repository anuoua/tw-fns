/**
 * --tw-inset-shadow-color: oklch(26.6% 0.079 36.259);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-950) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_orange_950 = () => `
    --tw-inset-shadow-color: oklch(26.6% 0.079 36.259);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-950) var(--tw-inset-shadow-alpha), transparent);
    `;
