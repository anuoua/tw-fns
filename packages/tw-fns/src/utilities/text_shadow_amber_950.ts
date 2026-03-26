/**
 * --tw-text-shadow-color: oklch(27.9% 0.077 45.635);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-amber-950) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_amber_950 = () => `
    --tw-text-shadow-color: oklch(27.9% 0.077 45.635);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-amber-950) var(--tw-text-shadow-alpha), transparent);
    `;
