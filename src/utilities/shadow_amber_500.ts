/**
 * --tw-shadow-color: oklch(76.9% 0.188 70.08);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-amber-500) var(--tw-shadow-alpha), transparent);
 */
export const shadow_amber_500 = () => `
    --tw-shadow-color: oklch(76.9% 0.188 70.08);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-amber-500) var(--tw-shadow-alpha), transparent);
    `;
