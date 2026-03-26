/**
 * --tw-text-shadow-color: oklch(44.2% 0.017 285.786);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-zinc-600) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_zinc_600 = () => `
    --tw-text-shadow-color: oklch(44.2% 0.017 285.786);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-zinc-600) var(--tw-text-shadow-alpha), transparent);
    `;
