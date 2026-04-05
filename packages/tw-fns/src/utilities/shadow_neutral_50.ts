/**
 * - --tw-shadow-color: oklch(98.5% 0 0);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-neutral-50) var(--tw-shadow-alpha), transparent);
 */
export const shadow_neutral_50 = () => `  --tw-shadow-color: oklch(98.5% 0 0);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-neutral-50) var(--tw-shadow-alpha), transparent);`;
