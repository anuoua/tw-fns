/**
 * - --tw-inset-shadow-color: oklch(20.5% 0 0);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-inset-shadow-color: color-mix(in oklab, var(--color-neutral-900) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_neutral_900 = () => `  --tw-inset-shadow-color: oklch(20.5% 0 0);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-inset-shadow-color: color-mix(in oklab, var(--color-neutral-900) var(--tw-inset-shadow-alpha), transparent);`;
