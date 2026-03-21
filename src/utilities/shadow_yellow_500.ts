/**
 * --tw-shadow-color: oklch(79.5% 0.184 86.047);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-yellow-500) var(--tw-shadow-alpha), transparent);
 */
export const shadow_yellow_500 = () => `
    --tw-shadow-color: oklch(79.5% 0.184 86.047);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-yellow-500) var(--tw-shadow-alpha), transparent);
    `;
