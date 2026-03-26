/**
 * --tw-text-shadow-color: oklch(20.5% 0 0);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-neutral-900) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_neutral_900 = () => `
    --tw-text-shadow-color: oklch(20.5% 0 0);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-neutral-900) var(--tw-text-shadow-alpha), transparent);
    `;
