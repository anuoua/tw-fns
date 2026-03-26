/**
 * --tw-shadow-color: oklch(60.9% 0.126 221.723);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-cyan-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_cyan_600 = () => `
    --tw-shadow-color: oklch(60.9% 0.126 221.723);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-cyan-600) var(--tw-shadow-alpha), transparent);
    `;
