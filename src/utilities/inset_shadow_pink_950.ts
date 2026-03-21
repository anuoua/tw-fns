/**
 * --tw-inset-shadow-color: oklch(28.4% 0.109 3.907);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-pink-950) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_pink_950 = () => `
    --tw-inset-shadow-color: oklch(28.4% 0.109 3.907);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-pink-950) var(--tw-inset-shadow-alpha), transparent);
    `;
