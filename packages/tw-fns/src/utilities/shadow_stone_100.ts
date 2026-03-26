/**
 * --tw-shadow-color: oklch(97% 0.001 106.424);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-stone-100) var(--tw-shadow-alpha), transparent);
 */
export const shadow_stone_100 = () => `
    --tw-shadow-color: oklch(97% 0.001 106.424);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-stone-100) var(--tw-shadow-alpha), transparent);
    `;
