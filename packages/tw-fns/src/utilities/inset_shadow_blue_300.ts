/**
 * --tw-inset-shadow-color: oklch(80.9% 0.105 251.813);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-blue-300) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_blue_300 = () => `
    --tw-inset-shadow-color: oklch(80.9% 0.105 251.813);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-blue-300) var(--tw-inset-shadow-alpha), transparent);
    `;
