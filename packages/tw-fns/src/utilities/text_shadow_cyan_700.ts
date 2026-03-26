/**
 * --tw-text-shadow-color: oklch(52% 0.105 223.128);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-cyan-700) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_cyan_700 = () => `
    --tw-text-shadow-color: oklch(52% 0.105 223.128);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-cyan-700) var(--tw-text-shadow-alpha), transparent);
    `;
