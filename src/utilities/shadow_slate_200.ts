/**
 * --tw-shadow-color: oklch(92.9% 0.013 255.508);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-slate-200) var(--tw-shadow-alpha), transparent);
 */
export const shadow_slate_200 = () => `
    --tw-shadow-color: oklch(92.9% 0.013 255.508);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-slate-200) var(--tw-shadow-alpha), transparent);
    `;
