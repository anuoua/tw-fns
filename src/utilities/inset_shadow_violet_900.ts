/**
 * --tw-inset-shadow-color: oklch(38% 0.189 293.745);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-violet-900) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_violet_900 = () => `
    --tw-inset-shadow-color: oklch(38% 0.189 293.745);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-violet-900) var(--tw-inset-shadow-alpha), transparent);
    `;
