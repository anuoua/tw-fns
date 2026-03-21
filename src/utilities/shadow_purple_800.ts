/**
 * --tw-shadow-color: oklch(43.8% 0.218 303.724);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-purple-800) var(--tw-shadow-alpha), transparent);
 */
export const shadow_purple_800 = () => `
    --tw-shadow-color: oklch(43.8% 0.218 303.724);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-purple-800) var(--tw-shadow-alpha), transparent);
    `;
