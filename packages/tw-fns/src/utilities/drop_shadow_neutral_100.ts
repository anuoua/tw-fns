/**
 * - --tw-drop-shadow-color: oklch(97% 0 0);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-drop-shadow-color: color-mix(in oklab, var(--color-neutral-100) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_neutral_100 = () => `  --tw-drop-shadow-color: oklch(97% 0 0);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-drop-shadow-color: color-mix(in oklab, var(--color-neutral-100) var(--tw-drop-shadow-alpha), transparent);`;
