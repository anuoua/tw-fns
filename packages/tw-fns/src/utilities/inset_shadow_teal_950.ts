/**
 * --tw-inset-shadow-color: oklch(27.7% 0.046 192.524);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-teal-950) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_teal_950 = () => `
    --tw-inset-shadow-color: oklch(27.7% 0.046 192.524);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-teal-950) var(--tw-inset-shadow-alpha), transparent);
    `;
