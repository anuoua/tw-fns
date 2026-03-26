/**
 * --tw-text-shadow-color: oklch(12.9% 0.042 264.695);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-950) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_slate_950 = () => `
    --tw-text-shadow-color: oklch(12.9% 0.042 264.695);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-950) var(--tw-text-shadow-alpha), transparent);
    `;
