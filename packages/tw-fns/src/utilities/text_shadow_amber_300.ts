/**
 * --tw-text-shadow-color: oklch(87.9% 0.169 91.605);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-amber-300) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_amber_300 = () => `
    --tw-text-shadow-color: oklch(87.9% 0.169 91.605);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-amber-300) var(--tw-text-shadow-alpha), transparent);
    `;
