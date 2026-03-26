/**
 * --tw-inset-shadow-color: oklch(43.8% 0.218 303.724);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-purple-800) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_purple_800 = () => `
    --tw-inset-shadow-color: oklch(43.8% 0.218 303.724);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-purple-800) var(--tw-inset-shadow-alpha), transparent);
    `;
