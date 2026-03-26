/**
 * --tw-text-shadow-color: oklch(89.7% 0.196 126.665);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-lime-300) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_lime_300 = () => `
    --tw-text-shadow-color: oklch(89.7% 0.196 126.665);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-lime-300) var(--tw-text-shadow-alpha), transparent);
    `;
