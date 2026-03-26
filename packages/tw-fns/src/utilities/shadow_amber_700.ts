/**
 * --tw-shadow-color: oklch(55.5% 0.163 48.998);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-amber-700) var(--tw-shadow-alpha), transparent);
 */
export const shadow_amber_700 = () => `
    --tw-shadow-color: oklch(55.5% 0.163 48.998);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-amber-700) var(--tw-shadow-alpha), transparent);
    `;
