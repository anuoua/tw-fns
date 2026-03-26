/**
 * --tw-text-shadow-color: oklch(97.9% 0.021 166.113);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-50) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_emerald_50 = () => `
    --tw-text-shadow-color: oklch(97.9% 0.021 166.113);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-50) var(--tw-text-shadow-alpha), transparent);
    `;
