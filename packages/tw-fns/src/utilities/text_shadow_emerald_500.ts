/**
 * --tw-text-shadow-color: oklch(69.6% 0.17 162.48);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-500) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_emerald_500 = () => `
    --tw-text-shadow-color: oklch(69.6% 0.17 162.48);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-500) var(--tw-text-shadow-alpha), transparent);
    `;
