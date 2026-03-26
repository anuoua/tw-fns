/**
 * --tw-text-shadow-color: oklch(37.9% 0.146 265.522);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-blue-900) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_blue_900 = () => `
    --tw-text-shadow-color: oklch(37.9% 0.146 265.522);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-blue-900) var(--tw-text-shadow-alpha), transparent);
    `;
