/**
 * --tw-shadow-color: oklch(92.5% 0.084 155.995);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-green-200) var(--tw-shadow-alpha), transparent);
 */
export const shadow_green_200 = () => `
    --tw-shadow-color: oklch(92.5% 0.084 155.995);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-green-200) var(--tw-shadow-alpha), transparent);
    `;
