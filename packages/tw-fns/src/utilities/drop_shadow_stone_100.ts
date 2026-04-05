/**
 * - --tw-drop-shadow-color: oklch(97% 0.001 106.424);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-100) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_stone_100 = () => `  --tw-drop-shadow-color: oklch(97% 0.001 106.424);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-100) var(--tw-drop-shadow-alpha), transparent);`;
