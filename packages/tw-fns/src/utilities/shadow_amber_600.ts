/**
 * --tw-shadow-color: oklch(66.6% 0.179 58.318);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-amber-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_amber_600 = () => `
    --tw-shadow-color: oklch(66.6% 0.179 58.318);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-amber-600) var(--tw-shadow-alpha), transparent);
    `;
