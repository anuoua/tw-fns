/**
 * --tw-text-shadow-color: oklch(21% 0.006 285.885);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-zinc-900) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_zinc_900 = () => `
    --tw-text-shadow-color: oklch(21% 0.006 285.885);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-zinc-900) var(--tw-text-shadow-alpha), transparent);
    `;
