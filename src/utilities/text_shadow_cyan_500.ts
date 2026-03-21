/**
 * --tw-text-shadow-color: oklch(71.5% 0.143 215.221);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-cyan-500) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_cyan_500 = () => `
    --tw-text-shadow-color: oklch(71.5% 0.143 215.221);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-cyan-500) var(--tw-text-shadow-alpha), transparent);
    `;
