/**
 * --tw-inset-shadow-color: oklch(86.5% 0.127 207.078);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-cyan-300) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_cyan_300 = () => `
    --tw-inset-shadow-color: oklch(86.5% 0.127 207.078);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-cyan-300) var(--tw-inset-shadow-alpha), transparent);
    `;
