/**
 * - --tw-shadow-color: oklch(70.9% 0.01 56.259);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-stone-400) var(--tw-shadow-alpha), transparent);
 */
export const shadow_stone_400 = () => `  --tw-shadow-color: oklch(70.9% 0.01 56.259);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-stone-400) var(--tw-shadow-alpha), transparent);`;
