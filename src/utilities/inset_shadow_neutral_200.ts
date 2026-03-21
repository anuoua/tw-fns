/**
 * --tw-inset-shadow-color: oklch(92.2% 0 0);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-neutral-200) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_neutral_200 = () => `
    --tw-inset-shadow-color: oklch(92.2% 0 0);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-neutral-200) var(--tw-inset-shadow-alpha), transparent);
    `;
