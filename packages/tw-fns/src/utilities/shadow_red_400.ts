/**
 * - --tw-shadow-color: oklch(70.4% 0.191 22.216);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-red-400) var(--tw-shadow-alpha), transparent);
 */
export const shadow_red_400 = () => `  --tw-shadow-color: oklch(70.4% 0.191 22.216);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-red-400) var(--tw-shadow-alpha), transparent);`;
