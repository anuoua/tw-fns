/**
 * --tw-inset-shadow-color: oklch(78.9% 0.154 211.53);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-cyan-400) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_cyan_400 = () => `
    --tw-inset-shadow-color: oklch(78.9% 0.154 211.53);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-cyan-400) var(--tw-inset-shadow-alpha), transparent);
    `;
