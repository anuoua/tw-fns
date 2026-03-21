/**
 * --tw-text-shadow-color: oklch(55.3% 0.013 58.071);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-stone-500) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_stone_500 = () => `
    --tw-text-shadow-color: oklch(55.3% 0.013 58.071);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-stone-500) var(--tw-text-shadow-alpha), transparent);
    `;
