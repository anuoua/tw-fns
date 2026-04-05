/**
 * - --tw-drop-shadow-color: oklch(98.5% 0.001 106.423);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-50) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_stone_50 = () => `  --tw-drop-shadow-color: oklch(98.5% 0.001 106.423);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-50) var(--tw-drop-shadow-alpha), transparent);`;
