/**
 * --tw-shadow-color: oklch(96.7% 0.001 286.375);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-zinc-100) var(--tw-shadow-alpha), transparent);
 */
export const shadow_zinc_100 = () => `
    --tw-shadow-color: oklch(96.7% 0.001 286.375);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-zinc-100) var(--tw-shadow-alpha), transparent);
    `;
