/**
 * --tw-inset-shadow-color: oklch(60.6% 0.25 292.717);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-violet-500) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_violet_500 = () => `
    --tw-inset-shadow-color: oklch(60.6% 0.25 292.717);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-violet-500) var(--tw-inset-shadow-alpha), transparent);
    `;
