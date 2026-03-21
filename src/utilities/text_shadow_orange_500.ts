/**
 * --tw-text-shadow-color: oklch(70.5% 0.213 47.604);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-orange-500) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_orange_500 = () => `
    --tw-text-shadow-color: oklch(70.5% 0.213 47.604);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-orange-500) var(--tw-text-shadow-alpha), transparent);
    `;
