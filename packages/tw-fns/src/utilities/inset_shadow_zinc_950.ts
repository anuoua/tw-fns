/**
 * --tw-inset-shadow-color: oklch(14.1% 0.005 285.823);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-zinc-950) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_zinc_950 = () => `
    --tw-inset-shadow-color: oklch(14.1% 0.005 285.823);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-zinc-950) var(--tw-inset-shadow-alpha), transparent);
    `;
