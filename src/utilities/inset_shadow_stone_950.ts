/**
 * --tw-inset-shadow-color: oklch(14.7% 0.004 49.25);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-stone-950) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_stone_950 = () => `
    --tw-inset-shadow-color: oklch(14.7% 0.004 49.25);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-stone-950) var(--tw-inset-shadow-alpha), transparent);
    `;
