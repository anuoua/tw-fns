/**
 * - --tw-shadow-color: oklch(44.3% 0.11 240.79);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-sky-800) var(--tw-shadow-alpha), transparent);
 */
export const shadow_sky_800 = () => `  --tw-shadow-color: oklch(44.3% 0.11 240.79);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-sky-800) var(--tw-shadow-alpha), transparent);`;
