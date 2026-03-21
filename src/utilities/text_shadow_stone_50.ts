/**
 * --tw-text-shadow-color: oklch(98.5% 0.001 106.423);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-stone-50) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_stone_50 = () => `
    --tw-text-shadow-color: oklch(98.5% 0.001 106.423);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-stone-50) var(--tw-text-shadow-alpha), transparent);
    `;
