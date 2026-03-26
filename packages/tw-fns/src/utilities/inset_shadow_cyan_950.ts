/**
 * --tw-inset-shadow-color: oklch(30.2% 0.056 229.695);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-cyan-950) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_cyan_950 = () => `
    --tw-inset-shadow-color: oklch(30.2% 0.056 229.695);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-cyan-950) var(--tw-inset-shadow-alpha), transparent);
    `;
