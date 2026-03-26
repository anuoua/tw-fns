/**
 * --tw-text-shadow-color: oklch(40.5% 0.101 131.063);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-lime-900) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_lime_900 = () => `
    --tw-text-shadow-color: oklch(40.5% 0.101 131.063);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-lime-900) var(--tw-text-shadow-alpha), transparent);
    `;
