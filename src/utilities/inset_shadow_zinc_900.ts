/**
 * --tw-inset-shadow-color: oklch(21% 0.006 285.885);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-zinc-900) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_zinc_900 = () => `
    --tw-inset-shadow-color: oklch(21% 0.006 285.885);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-zinc-900) var(--tw-inset-shadow-alpha), transparent);
    `;
