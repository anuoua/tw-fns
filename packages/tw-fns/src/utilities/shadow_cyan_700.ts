/**
 * --tw-shadow-color: oklch(52% 0.105 223.128);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-cyan-700) var(--tw-shadow-alpha), transparent);
 */
export const shadow_cyan_700 = () => `
    --tw-shadow-color: oklch(52% 0.105 223.128);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-cyan-700) var(--tw-shadow-alpha), transparent);
    `;
