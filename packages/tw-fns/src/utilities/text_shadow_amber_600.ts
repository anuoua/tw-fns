/**
 * --tw-text-shadow-color: oklch(66.6% 0.179 58.318);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-amber-600) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_amber_600 = () => `
    --tw-text-shadow-color: oklch(66.6% 0.179 58.318);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-amber-600) var(--tw-text-shadow-alpha), transparent);
    `;
