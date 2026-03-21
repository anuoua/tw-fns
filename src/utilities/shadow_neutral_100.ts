/**
 * --tw-shadow-color: oklch(97% 0 0);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-neutral-100) var(--tw-shadow-alpha), transparent);
 */
export const shadow_neutral_100 = () => `
    --tw-shadow-color: oklch(97% 0 0);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-neutral-100) var(--tw-shadow-alpha), transparent);
    `;
