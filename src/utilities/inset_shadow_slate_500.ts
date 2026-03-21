/**
 * --tw-inset-shadow-color: oklch(55.4% 0.046 257.417);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-slate-500) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_slate_500 = () => `
    --tw-inset-shadow-color: oklch(55.4% 0.046 257.417);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-slate-500) var(--tw-inset-shadow-alpha), transparent);
    `;
