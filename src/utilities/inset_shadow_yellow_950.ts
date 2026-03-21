/**
 * --tw-inset-shadow-color: oklch(28.6% 0.066 53.813);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-yellow-950) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_yellow_950 = () => `
    --tw-inset-shadow-color: oklch(28.6% 0.066 53.813);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-yellow-950) var(--tw-inset-shadow-alpha), transparent);
    `;
