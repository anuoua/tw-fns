/**
 * --tw-shadow-color: oklch(92.2% 0 0);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-neutral-200) var(--tw-shadow-alpha), transparent);
 */
export const shadow_neutral_200 = () => `
    --tw-shadow-color: oklch(92.2% 0 0);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-neutral-200) var(--tw-shadow-alpha), transparent);
    `;
