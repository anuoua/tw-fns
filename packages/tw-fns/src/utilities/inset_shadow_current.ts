/**
 * - --tw-inset-shadow-color: currentcolor;
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-inset-shadow-color: color-mix(in oklab, currentcolor var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_current = () => `  --tw-inset-shadow-color: currentcolor;
  @supports (color: color-mix(in lab, red, red)) {
  --tw-inset-shadow-color: color-mix(in oklab, currentcolor var(--tw-inset-shadow-alpha), transparent);`;
