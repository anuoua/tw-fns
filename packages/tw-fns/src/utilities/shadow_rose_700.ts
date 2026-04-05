/**
 * - --tw-shadow-color: oklch(51.4% 0.222 16.935);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-rose-700) var(--tw-shadow-alpha), transparent);
 */
export const shadow_rose_700 = () => `  --tw-shadow-color: oklch(51.4% 0.222 16.935);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-rose-700) var(--tw-shadow-alpha), transparent);`;
