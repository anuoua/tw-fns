/**
 * --tw-shadow-color: oklch(55.3% 0.013 58.071);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-stone-500) var(--tw-shadow-alpha), transparent);
 */
export const shadow_stone_500 = () => `
    --tw-shadow-color: oklch(55.3% 0.013 58.071);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-stone-500) var(--tw-shadow-alpha), transparent);
    `;
