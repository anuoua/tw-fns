/**
 * --tw-text-shadow-color: oklch(96.7% 0.001 286.375);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-zinc-100) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_zinc_100 = () => `
    --tw-text-shadow-color: oklch(96.7% 0.001 286.375);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-zinc-100) var(--tw-text-shadow-alpha), transparent);
    `;
