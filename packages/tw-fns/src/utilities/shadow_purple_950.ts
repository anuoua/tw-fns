/**
 * --tw-shadow-color: oklch(29.1% 0.149 302.717);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-purple-950) var(--tw-shadow-alpha), transparent);
 */
export const shadow_purple_950 = () => `
    --tw-shadow-color: oklch(29.1% 0.149 302.717);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-purple-950) var(--tw-shadow-alpha), transparent);
    `;
