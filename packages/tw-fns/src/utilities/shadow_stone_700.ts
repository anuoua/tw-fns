/**
 * - --tw-shadow-color: oklch(37.4% 0.01 67.558);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-stone-700) var(--tw-shadow-alpha), transparent);
 */
export const shadow_stone_700 = () => `  --tw-shadow-color: oklch(37.4% 0.01 67.558);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-stone-700) var(--tw-shadow-alpha), transparent);`;
