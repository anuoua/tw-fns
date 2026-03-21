/**
 * --tw-text-shadow-color: oklch(70.4% 0.191 22.216);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-red-400) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_red_400 = () => `
    --tw-text-shadow-color: oklch(70.4% 0.191 22.216);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-red-400) var(--tw-text-shadow-alpha), transparent);
    `;
