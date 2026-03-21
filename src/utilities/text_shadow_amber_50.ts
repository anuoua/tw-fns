/**
 * --tw-text-shadow-color: oklch(98.7% 0.022 95.277);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-amber-50) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_amber_50 = () => `
    --tw-text-shadow-color: oklch(98.7% 0.022 95.277);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-amber-50) var(--tw-text-shadow-alpha), transparent);
    `;
