/**
 * --tw-text-shadow-color: oklch(76.5% 0.177 163.223);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-400) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_emerald_400 = () => `
    --tw-text-shadow-color: oklch(76.5% 0.177 163.223);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-400) var(--tw-text-shadow-alpha), transparent);
    `;
