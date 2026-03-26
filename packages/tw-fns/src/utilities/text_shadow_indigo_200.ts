/**
 * --tw-text-shadow-color: oklch(87% 0.065 274.039);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-indigo-200) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_indigo_200 = () => `
    --tw-text-shadow-color: oklch(87% 0.065 274.039);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-indigo-200) var(--tw-text-shadow-alpha), transparent);
    `;
