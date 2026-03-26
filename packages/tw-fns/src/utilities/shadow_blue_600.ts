/**
 * --tw-shadow-color: oklch(54.6% 0.245 262.881);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-blue-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_blue_600 = () => `
    --tw-shadow-color: oklch(54.6% 0.245 262.881);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-blue-600) var(--tw-shadow-alpha), transparent);
    `;
