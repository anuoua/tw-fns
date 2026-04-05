/**
 * - --tw-drop-shadow-color: oklch(44.4% 0.011 73.639);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-600) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_stone_600 = () => `  --tw-drop-shadow-color: oklch(44.4% 0.011 73.639);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-600) var(--tw-drop-shadow-alpha), transparent);`;
