/**
 * --tw-inset-shadow-color: oklch(70.9% 0.01 56.259);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-stone-400) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_stone_400 = () => `
    --tw-inset-shadow-color: oklch(70.9% 0.01 56.259);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-stone-400) var(--tw-inset-shadow-alpha), transparent);
    `;
