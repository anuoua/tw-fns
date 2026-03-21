/**
 * --tw-shadow-color: oklch(87% 0 0);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-neutral-300) var(--tw-shadow-alpha), transparent);
 */
export const shadow_neutral_300 = () => `
    --tw-shadow-color: oklch(87% 0 0);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-neutral-300) var(--tw-shadow-alpha), transparent);
    `;
