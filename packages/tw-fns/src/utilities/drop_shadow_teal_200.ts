/**
 * - --tw-drop-shadow-color: oklch(91% 0.096 180.426);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-200) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_teal_200 = () => `  --tw-drop-shadow-color: oklch(91% 0.096 180.426);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-200) var(--tw-drop-shadow-alpha), transparent);`;
