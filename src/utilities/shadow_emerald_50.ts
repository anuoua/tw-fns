/**
 * --tw-shadow-color: oklch(97.9% 0.021 166.113);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-emerald-50) var(--tw-shadow-alpha), transparent);
 */
export const shadow_emerald_50 = () => `
    --tw-shadow-color: oklch(97.9% 0.021 166.113);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-emerald-50) var(--tw-shadow-alpha), transparent);
    `;
