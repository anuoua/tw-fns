/**
 * --tw-text-shadow-color: oklch(76.9% 0.188 70.08);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-amber-500) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_amber_500 = () => `
    --tw-text-shadow-color: oklch(76.9% 0.188 70.08);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-amber-500) var(--tw-text-shadow-alpha), transparent);
    `;
