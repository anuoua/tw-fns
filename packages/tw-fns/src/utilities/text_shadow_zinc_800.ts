/**
 * --tw-text-shadow-color: oklch(27.4% 0.006 286.033);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-zinc-800) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_zinc_800 = () => `
    --tw-text-shadow-color: oklch(27.4% 0.006 286.033);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-zinc-800) var(--tw-text-shadow-alpha), transparent);
    `;
