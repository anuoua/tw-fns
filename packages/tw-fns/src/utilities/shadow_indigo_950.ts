/**
 * --tw-shadow-color: oklch(25.7% 0.09 281.288);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-indigo-950) var(--tw-shadow-alpha), transparent);
 */
export const shadow_indigo_950 = () => `
    --tw-shadow-color: oklch(25.7% 0.09 281.288);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-indigo-950) var(--tw-shadow-alpha), transparent);
    `;
