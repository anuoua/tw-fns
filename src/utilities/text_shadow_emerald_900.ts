/**
 * --tw-text-shadow-color: oklch(37.8% 0.077 168.94);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-900) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_emerald_900 = () => `
    --tw-text-shadow-color: oklch(37.8% 0.077 168.94);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-900) var(--tw-text-shadow-alpha), transparent);
    `;
