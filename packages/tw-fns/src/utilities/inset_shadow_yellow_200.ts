/**
 * --tw-inset-shadow-color: oklch(94.5% 0.129 101.54);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-yellow-200) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_yellow_200 = () => `
    --tw-inset-shadow-color: oklch(94.5% 0.129 101.54);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-yellow-200) var(--tw-inset-shadow-alpha), transparent);
    `;
