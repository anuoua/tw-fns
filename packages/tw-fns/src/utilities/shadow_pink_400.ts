/**
 * --tw-shadow-color: oklch(71.8% 0.202 349.761);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-pink-400) var(--tw-shadow-alpha), transparent);
 */
export const shadow_pink_400 = () => `
    --tw-shadow-color: oklch(71.8% 0.202 349.761);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-pink-400) var(--tw-shadow-alpha), transparent);
    `;
