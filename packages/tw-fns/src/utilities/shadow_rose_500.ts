/**
 * - --tw-shadow-color: oklch(64.5% 0.246 16.439);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-rose-500) var(--tw-shadow-alpha), transparent);
 */
export const shadow_rose_500 = () => `  --tw-shadow-color: oklch(64.5% 0.246 16.439);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-rose-500) var(--tw-shadow-alpha), transparent);`;
