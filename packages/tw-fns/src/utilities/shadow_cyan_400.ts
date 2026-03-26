/**
 * --tw-shadow-color: oklch(78.9% 0.154 211.53);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-cyan-400) var(--tw-shadow-alpha), transparent);
 */
export const shadow_cyan_400 = () => `
    --tw-shadow-color: oklch(78.9% 0.154 211.53);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-cyan-400) var(--tw-shadow-alpha), transparent);
    `;
