/**
 * - --tw-shadow-color: oklch(20.5% 0 0);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-neutral-900) var(--tw-shadow-alpha), transparent);
 */
export const shadow_neutral_900 = () => `  --tw-shadow-color: oklch(20.5% 0 0);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-neutral-900) var(--tw-shadow-alpha), transparent);`;
