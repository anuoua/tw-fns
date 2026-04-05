/**
 * - --tw-inset-shadow-color: oklch(98.5% 0 0);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-inset-shadow-color: color-mix(in oklab, var(--color-zinc-50) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_zinc_50 = () => `  --tw-inset-shadow-color: oklch(98.5% 0 0);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-inset-shadow-color: color-mix(in oklab, var(--color-zinc-50) var(--tw-inset-shadow-alpha), transparent);`;
