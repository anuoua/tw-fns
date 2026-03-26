/**
 * --tw-text-shadow-color: oklch(86.9% 0.005 56.366);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-stone-300) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_stone_300 = () => `
    --tw-text-shadow-color: oklch(86.9% 0.005 56.366);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-stone-300) var(--tw-text-shadow-alpha), transparent);
    `;
