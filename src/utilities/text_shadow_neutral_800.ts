/**
 * --tw-text-shadow-color: oklch(26.9% 0 0);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-neutral-800) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_neutral_800 = () => `
    --tw-text-shadow-color: oklch(26.9% 0 0);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-neutral-800) var(--tw-text-shadow-alpha), transparent);
    `;
