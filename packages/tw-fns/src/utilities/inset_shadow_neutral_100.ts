/**
 * - --tw-inset-shadow-color: oklch(97% 0 0);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-inset-shadow-color: color-mix(in oklab, var(--color-neutral-100) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_neutral_100 = () => `  --tw-inset-shadow-color: oklch(97% 0 0);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-inset-shadow-color: color-mix(in oklab, var(--color-neutral-100) var(--tw-inset-shadow-alpha), transparent);`;
