/**
 * --tw-inset-shadow-color: oklch(44.4% 0.011 73.639);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-stone-600) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_stone_600 = () => `
    --tw-inset-shadow-color: oklch(44.4% 0.011 73.639);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-stone-600) var(--tw-inset-shadow-alpha), transparent);
    `;
