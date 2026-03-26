/**
 * --tw-shadow-color: oklch(74% 0.238 322.16);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-fuchsia-400) var(--tw-shadow-alpha), transparent);
 */
export const shadow_fuchsia_400 = () => `
    --tw-shadow-color: oklch(74% 0.238 322.16);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-fuchsia-400) var(--tw-shadow-alpha), transparent);
    `;
