/**
 * --tw-inset-shadow-color: oklch(70.4% 0.04 256.788);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-slate-400) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_slate_400 = () => `
    --tw-inset-shadow-color: oklch(70.4% 0.04 256.788);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-slate-400) var(--tw-inset-shadow-alpha), transparent);
    `;
