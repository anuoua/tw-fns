/**
 * - --tw-shadow-color: oklch(43.9% 0 0);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-neutral-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_neutral_600 = () => `  --tw-shadow-color: oklch(43.9% 0 0);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-neutral-600) var(--tw-shadow-alpha), transparent);`;
