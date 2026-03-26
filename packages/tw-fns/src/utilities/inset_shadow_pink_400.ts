/**
 * --tw-inset-shadow-color: oklch(71.8% 0.202 349.761);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-pink-400) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_pink_400 = () => `
    --tw-inset-shadow-color: oklch(71.8% 0.202 349.761);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-pink-400) var(--tw-inset-shadow-alpha), transparent);
    `;
