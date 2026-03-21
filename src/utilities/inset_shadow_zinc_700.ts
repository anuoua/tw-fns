/**
 * --tw-inset-shadow-color: oklch(37% 0.013 285.805);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-zinc-700) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_zinc_700 = () => `
    --tw-inset-shadow-color: oklch(37% 0.013 285.805);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-zinc-700) var(--tw-inset-shadow-alpha), transparent);
    `;
