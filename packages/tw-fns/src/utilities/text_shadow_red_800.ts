/**
 * --tw-text-shadow-color: oklch(44.4% 0.177 26.899);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-red-800) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_red_800 = () => `
    --tw-text-shadow-color: oklch(44.4% 0.177 26.899);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-red-800) var(--tw-text-shadow-alpha), transparent);
    `;
