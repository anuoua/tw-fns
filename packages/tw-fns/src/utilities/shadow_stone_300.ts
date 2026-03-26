/**
 * --tw-shadow-color: oklch(86.9% 0.005 56.366);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-stone-300) var(--tw-shadow-alpha), transparent);
 */
export const shadow_stone_300 = () => `
    --tw-shadow-color: oklch(86.9% 0.005 56.366);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-stone-300) var(--tw-shadow-alpha), transparent);
    `;
