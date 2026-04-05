/**
 * - --tw-shadow-color: oklch(26.9% 0 0);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-neutral-800) var(--tw-shadow-alpha), transparent);
 */
export const shadow_neutral_800 = () => `  --tw-shadow-color: oklch(26.9% 0 0);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-neutral-800) var(--tw-shadow-alpha), transparent);`;
