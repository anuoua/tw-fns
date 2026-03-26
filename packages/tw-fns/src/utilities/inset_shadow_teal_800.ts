/**
 * --tw-inset-shadow-color: oklch(43.7% 0.078 188.216);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-teal-800) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_teal_800 = () => `
    --tw-inset-shadow-color: oklch(43.7% 0.078 188.216);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-teal-800) var(--tw-inset-shadow-alpha), transparent);
    `;
