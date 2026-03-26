/**
 * --tw-text-shadow-color: oklch(60.6% 0.25 292.717);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-violet-500) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_violet_500 = () => `
    --tw-text-shadow-color: oklch(60.6% 0.25 292.717);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-violet-500) var(--tw-text-shadow-alpha), transparent);
    `;
