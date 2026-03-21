/**
 * --tw-text-shadow-color: oklch(60% 0.118 184.704);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-teal-600) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_teal_600 = () => `
    --tw-text-shadow-color: oklch(60% 0.118 184.704);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-teal-600) var(--tw-text-shadow-alpha), transparent);
    `;
