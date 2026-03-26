/**
 * --tw-inset-shadow-color: oklch(43.9% 0 0);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-neutral-600) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_neutral_600 = () => `
    --tw-inset-shadow-color: oklch(43.9% 0 0);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-neutral-600) var(--tw-inset-shadow-alpha), transparent);
    `;
