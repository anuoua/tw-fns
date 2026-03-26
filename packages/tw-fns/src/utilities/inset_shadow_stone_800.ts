/**
 * --tw-inset-shadow-color: oklch(26.8% 0.007 34.298);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-stone-800) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_stone_800 = () => `
    --tw-inset-shadow-color: oklch(26.8% 0.007 34.298);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-stone-800) var(--tw-inset-shadow-alpha), transparent);
    `;
