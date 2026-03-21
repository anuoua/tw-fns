/**
 * --tw-text-shadow-color: oklch(86.9% 0.022 252.894);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-300) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_slate_300 = () => `
    --tw-text-shadow-color: oklch(86.9% 0.022 252.894);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-slate-300) var(--tw-text-shadow-alpha), transparent);
    `;
