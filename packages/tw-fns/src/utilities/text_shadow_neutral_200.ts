/**
 * - --tw-text-shadow-color: oklch(92.2% 0 0);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-text-shadow-color: color-mix(in oklab, var(--color-neutral-200) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_neutral_200 = () => `  --tw-text-shadow-color: oklch(92.2% 0 0);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-text-shadow-color: color-mix(in oklab, var(--color-neutral-200) var(--tw-text-shadow-alpha), transparent);`;
