/**
 * --tw-shadow-color: oklch(26.8% 0.007 34.298);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-stone-800) var(--tw-shadow-alpha), transparent);
 */
export const shadow_stone_800 = () => `
    --tw-shadow-color: oklch(26.8% 0.007 34.298);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-stone-800) var(--tw-shadow-alpha), transparent);
    `;
