/**
 * --tw-inset-shadow-color: oklch(37.1% 0 0);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-neutral-700) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_neutral_700 = () => `
    --tw-inset-shadow-color: oklch(37.1% 0 0);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-neutral-700) var(--tw-inset-shadow-alpha), transparent);
    `;
