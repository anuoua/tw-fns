/**
 * --tw-text-shadow-color: oklch(54.6% 0.245 262.881);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-blue-600) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_blue_600 = () => `
    --tw-text-shadow-color: oklch(54.6% 0.245 262.881);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-blue-600) var(--tw-text-shadow-alpha), transparent);
    `;
