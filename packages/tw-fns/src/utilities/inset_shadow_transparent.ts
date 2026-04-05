/**
 * - --tw-inset-shadow-color: transparent;
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-inset-shadow-color: color-mix(in oklab, transparent var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_transparent = () => `  --tw-inset-shadow-color: transparent;
  @supports (color: color-mix(in lab, red, red)) {
  --tw-inset-shadow-color: color-mix(in oklab, transparent var(--tw-inset-shadow-alpha), transparent);`;
