/**
 * - --tw-shadow-color: oklch(70.8% 0 0);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-neutral-400) var(--tw-shadow-alpha), transparent);
 */
export const shadow_neutral_400 = () => `  --tw-shadow-color: oklch(70.8% 0 0);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-neutral-400) var(--tw-shadow-alpha), transparent);`;
