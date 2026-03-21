/**
 * --tw-text-shadow-color: oklch(84.5% 0.143 164.978);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-300) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_emerald_300 = () => `
    --tw-text-shadow-color: oklch(84.5% 0.143 164.978);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-300) var(--tw-text-shadow-alpha), transparent);
    `;
