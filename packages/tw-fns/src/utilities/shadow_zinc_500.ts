/**
 * - --tw-shadow-color: oklch(55.2% 0.016 285.938);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-zinc-500) var(--tw-shadow-alpha), transparent);
 */
export const shadow_zinc_500 = () => `  --tw-shadow-color: oklch(55.2% 0.016 285.938);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-zinc-500) var(--tw-shadow-alpha), transparent);`;
