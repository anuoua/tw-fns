/**
 * --tw-text-shadow-color: oklch(38.1% 0.176 304.987);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-purple-900) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_purple_900 = () => `
    --tw-text-shadow-color: oklch(38.1% 0.176 304.987);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-purple-900) var(--tw-text-shadow-alpha), transparent);
    `;
