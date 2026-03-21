/**
 * --tw-inset-shadow-color: oklch(47% 0.157 37.304);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-800) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_orange_800 = () => `
    --tw-inset-shadow-color: oklch(47% 0.157 37.304);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-800) var(--tw-inset-shadow-alpha), transparent);
    `;
