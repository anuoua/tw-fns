/**
 * --tw-inset-shadow-color: oklch(52% 0.105 223.128);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-cyan-700) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_cyan_700 = () => `
    --tw-inset-shadow-color: oklch(52% 0.105 223.128);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-cyan-700) var(--tw-inset-shadow-alpha), transparent);
    `;
