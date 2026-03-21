/**
 * --tw-inset-shadow-color: oklch(55.6% 0 0);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-neutral-500) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_neutral_500 = () => `
    --tw-inset-shadow-color: oklch(55.6% 0 0);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-neutral-500) var(--tw-inset-shadow-alpha), transparent);
    `;
