/**
 * --tw-shadow-color: oklch(47% 0.157 37.304);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-orange-800) var(--tw-shadow-alpha), transparent);
 */
export const shadow_orange_800 = () => `
    --tw-shadow-color: oklch(47% 0.157 37.304);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-orange-800) var(--tw-shadow-alpha), transparent);
    `;
