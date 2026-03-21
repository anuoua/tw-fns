/**
 * --tw-text-shadow-color: oklch(43.8% 0.218 303.724);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-purple-800) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_purple_800 = () => `
    --tw-text-shadow-color: oklch(43.8% 0.218 303.724);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-purple-800) var(--tw-text-shadow-alpha), transparent);
    `;
