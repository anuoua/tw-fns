/**
 * --tw-text-shadow-color: oklch(85.2% 0.199 91.936);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-yellow-400) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_yellow_400 = () => `
    --tw-text-shadow-color: oklch(85.2% 0.199 91.936);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-yellow-400) var(--tw-text-shadow-alpha), transparent);
    `;
