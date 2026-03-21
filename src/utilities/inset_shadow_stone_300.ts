/**
 * --tw-inset-shadow-color: oklch(86.9% 0.005 56.366);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-stone-300) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_stone_300 = () => `
    --tw-inset-shadow-color: oklch(86.9% 0.005 56.366);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-stone-300) var(--tw-inset-shadow-alpha), transparent);
    `;
