/**
 * --tw-inset-shadow-color: oklch(21.6% 0.006 56.043);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-stone-900) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_stone_900 = () => `
    --tw-inset-shadow-color: oklch(21.6% 0.006 56.043);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-stone-900) var(--tw-inset-shadow-alpha), transparent);
    `;
