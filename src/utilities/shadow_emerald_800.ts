/**
 * --tw-shadow-color: oklch(43.2% 0.095 166.913);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-emerald-800) var(--tw-shadow-alpha), transparent);
 */
export const shadow_emerald_800 = () => `
    --tw-shadow-color: oklch(43.2% 0.095 166.913);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-emerald-800) var(--tw-shadow-alpha), transparent);
    `;
