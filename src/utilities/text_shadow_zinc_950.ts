/**
 * --tw-text-shadow-color: oklch(14.1% 0.005 285.823);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-zinc-950) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_zinc_950 = () => `
    --tw-text-shadow-color: oklch(14.1% 0.005 285.823);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-zinc-950) var(--tw-text-shadow-alpha), transparent);
    `;
