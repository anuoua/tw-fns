/**
 * - --tw-shadow-color: oklch(89.2% 0.058 10.001);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-rose-200) var(--tw-shadow-alpha), transparent);
 */
export const shadow_rose_200 = () => `  --tw-shadow-color: oklch(89.2% 0.058 10.001);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-rose-200) var(--tw-shadow-alpha), transparent);`;
