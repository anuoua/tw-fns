/**
 * --tw-text-shadow-color: oklch(25.7% 0.09 281.288);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-indigo-950) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_indigo_950 = () => `
    --tw-text-shadow-color: oklch(25.7% 0.09 281.288);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-indigo-950) var(--tw-text-shadow-alpha), transparent);
    `;
