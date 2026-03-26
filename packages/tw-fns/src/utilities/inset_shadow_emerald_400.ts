/**
 * --tw-inset-shadow-color: oklch(76.5% 0.177 163.223);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-emerald-400) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_emerald_400 = () => `
    --tw-inset-shadow-color: oklch(76.5% 0.177 163.223);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-emerald-400) var(--tw-inset-shadow-alpha), transparent);
    `;
