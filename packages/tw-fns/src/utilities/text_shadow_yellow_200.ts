/**
 * --tw-text-shadow-color: oklch(94.5% 0.129 101.54);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-yellow-200) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_yellow_200 = () => `
    --tw-text-shadow-color: oklch(94.5% 0.129 101.54);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-yellow-200) var(--tw-text-shadow-alpha), transparent);
    `;
