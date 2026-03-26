/**
 * --tw-text-shadow-color: oklch(66.7% 0.295 322.15);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-500) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_fuchsia_500 = () => `
    --tw-text-shadow-color: oklch(66.7% 0.295 322.15);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-fuchsia-500) var(--tw-text-shadow-alpha), transparent);
    `;
