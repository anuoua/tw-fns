/**
 * --tw-text-shadow-color: oklch(44.4% 0.011 73.639);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-stone-600) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_stone_600 = () => `
    --tw-text-shadow-color: oklch(44.4% 0.011 73.639);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-stone-600) var(--tw-text-shadow-alpha), transparent);
    `;
