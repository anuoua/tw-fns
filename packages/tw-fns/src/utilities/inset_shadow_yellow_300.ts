/**
 * --tw-inset-shadow-color: oklch(90.5% 0.182 98.111);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-yellow-300) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_yellow_300 = () => `
    --tw-inset-shadow-color: oklch(90.5% 0.182 98.111);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-yellow-300) var(--tw-inset-shadow-alpha), transparent);
    `;
