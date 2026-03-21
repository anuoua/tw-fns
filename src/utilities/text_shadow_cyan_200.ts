/**
 * --tw-text-shadow-color: oklch(91.7% 0.08 205.041);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-cyan-200) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_cyan_200 = () => `
    --tw-text-shadow-color: oklch(91.7% 0.08 205.041);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-cyan-200) var(--tw-text-shadow-alpha), transparent);
    `;
