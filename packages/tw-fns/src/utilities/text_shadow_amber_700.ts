/**
 * --tw-text-shadow-color: oklch(55.5% 0.163 48.998);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-amber-700) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_amber_700 = () => `
    --tw-text-shadow-color: oklch(55.5% 0.163 48.998);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-amber-700) var(--tw-text-shadow-alpha), transparent);
    `;
