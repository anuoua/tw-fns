/**
 * --tw-shadow-color: oklch(14.5% 0 0);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-neutral-950) var(--tw-shadow-alpha), transparent);
 */
export const shadow_neutral_950 = () => `
    --tw-shadow-color: oklch(14.5% 0 0);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-neutral-950) var(--tw-shadow-alpha), transparent);
    `;
