/**
 * --tw-text-shadow-color: oklch(44.6% 0.043 257.281);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-600) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_slate_600 = () => `
    --tw-text-shadow-color: oklch(44.6% 0.043 257.281);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-600) var(--tw-text-shadow-alpha), transparent);
    `;
