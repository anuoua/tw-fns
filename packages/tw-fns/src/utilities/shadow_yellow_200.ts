/**
 * --tw-shadow-color: oklch(94.5% 0.129 101.54);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-yellow-200) var(--tw-shadow-alpha), transparent);
 */
export const shadow_yellow_200 = () => `
    --tw-shadow-color: oklch(94.5% 0.129 101.54);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-yellow-200) var(--tw-shadow-alpha), transparent);
    `;
