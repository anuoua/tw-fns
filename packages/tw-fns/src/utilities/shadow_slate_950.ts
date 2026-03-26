/**
 * --tw-shadow-color: oklch(12.9% 0.042 264.695);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-slate-950) var(--tw-shadow-alpha), transparent);
 */
export const shadow_slate_950 = () => `
    --tw-shadow-color: oklch(12.9% 0.042 264.695);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-slate-950) var(--tw-shadow-alpha), transparent);
    `;
