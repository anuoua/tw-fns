/**
 * --tw-text-shadow-color: oklch(79.2% 0.209 151.711);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-green-400) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_green_400 = () => `
    --tw-text-shadow-color: oklch(79.2% 0.209 151.711);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-green-400) var(--tw-text-shadow-alpha), transparent);
    `;
