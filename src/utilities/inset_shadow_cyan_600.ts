/**
 * --tw-inset-shadow-color: oklch(60.9% 0.126 221.723);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-cyan-600) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_cyan_600 = () => `
    --tw-inset-shadow-color: oklch(60.9% 0.126 221.723);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-cyan-600) var(--tw-inset-shadow-alpha), transparent);
    `;
