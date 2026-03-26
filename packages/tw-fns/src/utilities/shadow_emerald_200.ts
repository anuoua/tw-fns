/**
 * --tw-shadow-color: oklch(90.5% 0.093 164.15);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-emerald-200) var(--tw-shadow-alpha), transparent);
 */
export const shadow_emerald_200 = () => `
    --tw-shadow-color: oklch(90.5% 0.093 164.15);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-emerald-200) var(--tw-shadow-alpha), transparent);
    `;
