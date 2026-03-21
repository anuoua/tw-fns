/**
 * --tw-text-shadow-color: oklch(38% 0.189 293.745);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-violet-900) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_violet_900 = () => `
    --tw-text-shadow-color: oklch(38% 0.189 293.745);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-violet-900) var(--tw-text-shadow-alpha), transparent);
    `;
