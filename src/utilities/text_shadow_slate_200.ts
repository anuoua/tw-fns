/**
 * --tw-text-shadow-color: oklch(92.9% 0.013 255.508);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-200) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_slate_200 = () => `
    --tw-text-shadow-color: oklch(92.9% 0.013 255.508);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-200) var(--tw-text-shadow-alpha), transparent);
    `;
