/**
 * --tw-text-shadow-color: oklch(30.2% 0.056 229.695);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-cyan-950) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_cyan_950 = () => `
    --tw-text-shadow-color: oklch(30.2% 0.056 229.695);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-cyan-950) var(--tw-text-shadow-alpha), transparent);
    `;
