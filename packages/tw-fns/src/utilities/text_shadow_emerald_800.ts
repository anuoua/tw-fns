/**
 * --tw-text-shadow-color: oklch(43.2% 0.095 166.913);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-800) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_emerald_800 = () => `
    --tw-text-shadow-color: oklch(43.2% 0.095 166.913);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-800) var(--tw-text-shadow-alpha), transparent);
    `;
