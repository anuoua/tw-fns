/**
 * --tw-shadow-color: oklch(21.6% 0.006 56.043);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-stone-900) var(--tw-shadow-alpha), transparent);
 */
export const shadow_stone_900 = () => `
    --tw-shadow-color: oklch(21.6% 0.006 56.043);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-stone-900) var(--tw-shadow-alpha), transparent);
    `;
