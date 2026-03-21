/**
 * --tw-inset-shadow-color: oklch(66.6% 0.179 58.318);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-amber-600) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_amber_600 = () => `
    --tw-inset-shadow-color: oklch(66.6% 0.179 58.318);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-amber-600) var(--tw-inset-shadow-alpha), transparent);
    `;
