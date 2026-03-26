/**
 * --tw-inset-shadow-color: oklch(44.4% 0.177 26.899);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-red-800) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_red_800 = () => `
    --tw-inset-shadow-color: oklch(44.4% 0.177 26.899);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-red-800) var(--tw-inset-shadow-alpha), transparent);
    `;
