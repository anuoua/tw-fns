/**
 * --tw-shadow-color: oklch(44.4% 0.011 73.639);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-stone-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_stone_600 = () => `
    --tw-shadow-color: oklch(44.4% 0.011 73.639);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-stone-600) var(--tw-shadow-alpha), transparent);
    `;
