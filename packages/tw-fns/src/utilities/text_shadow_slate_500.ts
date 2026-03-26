/**
 * --tw-text-shadow-color: oklch(55.4% 0.046 257.417);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-500) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_slate_500 = () => `
    --tw-text-shadow-color: oklch(55.4% 0.046 257.417);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-500) var(--tw-text-shadow-alpha), transparent);
    `;
