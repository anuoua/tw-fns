/**
 * --tw-shadow-color: oklch(27.9% 0.077 45.635);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-amber-950) var(--tw-shadow-alpha), transparent);
 */
export const shadow_amber_950 = () => `
    --tw-shadow-color: oklch(27.9% 0.077 45.635);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-amber-950) var(--tw-shadow-alpha), transparent);
    `;
