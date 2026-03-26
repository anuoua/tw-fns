/**
 * --tw-text-shadow-color: oklch(29.1% 0.149 302.717);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-purple-950) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_purple_950 = () => `
    --tw-text-shadow-color: oklch(29.1% 0.149 302.717);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-purple-950) var(--tw-text-shadow-alpha), transparent);
    `;
