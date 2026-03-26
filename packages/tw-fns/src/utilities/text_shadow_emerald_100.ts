/**
 * --tw-text-shadow-color: oklch(95% 0.052 163.051);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-100) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_emerald_100 = () => `
    --tw-text-shadow-color: oklch(95% 0.052 163.051);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-emerald-100) var(--tw-text-shadow-alpha), transparent);
    `;
