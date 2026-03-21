/**
 * --tw-text-shadow-color: oklch(47% 0.157 37.304);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-orange-800) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_orange_800 = () => `
    --tw-text-shadow-color: oklch(47% 0.157 37.304);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-orange-800) var(--tw-text-shadow-alpha), transparent);
    `;
