/**
 * --tw-shadow-color: oklch(89.4% 0.057 293.283);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-violet-200) var(--tw-shadow-alpha), transparent);
 */
export const shadow_violet_200 = () => `
    --tw-shadow-color: oklch(89.4% 0.057 293.283);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-violet-200) var(--tw-shadow-alpha), transparent);
    `;
