/**
 * --tw-text-shadow-color: oklch(75% 0.183 55.934);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-orange-400) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_orange_400 = () => `
    --tw-text-shadow-color: oklch(75% 0.183 55.934);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-orange-400) var(--tw-text-shadow-alpha), transparent);
    `;
