/**
 * --tw-text-shadow-color: oklch(44.3% 0.11 240.79);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-sky-800) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_sky_800 = () => `
    --tw-text-shadow-color: oklch(44.3% 0.11 240.79);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-sky-800) var(--tw-text-shadow-alpha), transparent);
    `;
