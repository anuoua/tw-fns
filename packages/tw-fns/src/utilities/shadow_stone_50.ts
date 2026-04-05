/**
 * - --tw-shadow-color: oklch(98.5% 0.001 106.423);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-stone-50) var(--tw-shadow-alpha), transparent);
 */
export const shadow_stone_50 = () => `  --tw-shadow-color: oklch(98.5% 0.001 106.423);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-stone-50) var(--tw-shadow-alpha), transparent);`;
