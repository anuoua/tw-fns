/**
 * --tw-inset-shadow-color: oklch(29.1% 0.149 302.717);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-purple-950) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_purple_950 = () => `
    --tw-inset-shadow-color: oklch(29.1% 0.149 302.717);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-purple-950) var(--tw-inset-shadow-alpha), transparent);
    `;
