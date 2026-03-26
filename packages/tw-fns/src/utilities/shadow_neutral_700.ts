/**
 * --tw-shadow-color: oklch(37.1% 0 0);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-neutral-700) var(--tw-shadow-alpha), transparent);
 */
export const shadow_neutral_700 = () => `
    --tw-shadow-color: oklch(37.1% 0 0);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-neutral-700) var(--tw-shadow-alpha), transparent);
    `;
