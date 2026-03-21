/**
 * --tw-shadow-color: oklch(87.1% 0.006 286.286);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-zinc-300) var(--tw-shadow-alpha), transparent);
 */
export const shadow_zinc_300 = () => `
    --tw-shadow-color: oklch(87.1% 0.006 286.286);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-zinc-300) var(--tw-shadow-alpha), transparent);
    `;
