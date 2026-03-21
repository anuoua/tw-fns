/**
 * --tw-shadow-color: oklch(85.2% 0.199 91.936);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-yellow-400) var(--tw-shadow-alpha), transparent);
 */
export const shadow_yellow_400 = () => `
    --tw-shadow-color: oklch(85.2% 0.199 91.936);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-yellow-400) var(--tw-shadow-alpha), transparent);
    `;
