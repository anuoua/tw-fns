/**
 * - --tw-shadow-color: currentcolor;
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, currentcolor var(--tw-shadow-alpha), transparent);
 */
export const shadow_current = () => `  --tw-shadow-color: currentcolor;
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, currentcolor var(--tw-shadow-alpha), transparent);`;
