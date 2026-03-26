/**
 * --tw-text-shadow-color: oklch(70.9% 0.01 56.259);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-stone-400) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_stone_400 = () => `
    --tw-text-shadow-color: oklch(70.9% 0.01 56.259);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-stone-400) var(--tw-text-shadow-alpha), transparent);
    `;
