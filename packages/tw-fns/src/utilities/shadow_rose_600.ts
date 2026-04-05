/**
 * - --tw-shadow-color: oklch(58.6% 0.253 17.585);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-rose-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_rose_600 = () => `  --tw-shadow-color: oklch(58.6% 0.253 17.585);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-rose-600) var(--tw-shadow-alpha), transparent);`;
