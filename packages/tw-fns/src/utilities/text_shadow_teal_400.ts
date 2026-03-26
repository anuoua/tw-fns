/**
 * --tw-text-shadow-color: oklch(77.7% 0.152 181.912);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-teal-400) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_teal_400 = () => `
    --tw-text-shadow-color: oklch(77.7% 0.152 181.912);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-teal-400) var(--tw-text-shadow-alpha), transparent);
    `;
