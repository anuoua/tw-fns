/**
 * --tw-inset-shadow-color: oklch(70.7% 0.165 254.624);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-blue-400) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_blue_400 = () => `
    --tw-inset-shadow-color: oklch(70.7% 0.165 254.624);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-blue-400) var(--tw-inset-shadow-alpha), transparent);
    `;
