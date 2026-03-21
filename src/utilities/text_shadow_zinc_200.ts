/**
 * --tw-text-shadow-color: oklch(92% 0.004 286.32);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-zinc-200) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_zinc_200 = () => `
    --tw-text-shadow-color: oklch(92% 0.004 286.32);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-zinc-200) var(--tw-text-shadow-alpha), transparent);
    `;
