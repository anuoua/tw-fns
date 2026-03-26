/**
 * --tw-inset-shadow-color: oklch(70.8% 0 0);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-neutral-400) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_neutral_400 = () => `
    --tw-inset-shadow-color: oklch(70.8% 0 0);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-neutral-400) var(--tw-inset-shadow-alpha), transparent);
    `;
