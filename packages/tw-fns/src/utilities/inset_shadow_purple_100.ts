/**
 * --tw-inset-shadow-color: oklch(94.6% 0.033 307.174);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-purple-100) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_purple_100 = () => `
    --tw-inset-shadow-color: oklch(94.6% 0.033 307.174);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-purple-100) var(--tw-inset-shadow-alpha), transparent);
    `;
