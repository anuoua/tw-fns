/**
 * - --tw-drop-shadow-color: oklch(63.7% 0.237 25.331);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-500) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_red_500 = () => `  --tw-drop-shadow-color: oklch(63.7% 0.237 25.331);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-500) var(--tw-drop-shadow-alpha), transparent);`;
