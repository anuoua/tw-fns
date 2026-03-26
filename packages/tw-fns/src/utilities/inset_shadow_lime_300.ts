/**
 * --tw-inset-shadow-color: oklch(89.7% 0.196 126.665);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-lime-300) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_lime_300 = () => `
    --tw-inset-shadow-color: oklch(89.7% 0.196 126.665);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-lime-300) var(--tw-inset-shadow-alpha), transparent);
    `;
