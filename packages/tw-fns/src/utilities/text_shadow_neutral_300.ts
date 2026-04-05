/**
 * - --tw-text-shadow-color: oklch(87% 0 0);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-text-shadow-color: color-mix(in oklab, var(--color-neutral-300) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_neutral_300 = () => `  --tw-text-shadow-color: oklch(87% 0 0);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-text-shadow-color: color-mix(in oklab, var(--color-neutral-300) var(--tw-text-shadow-alpha), transparent);`;
