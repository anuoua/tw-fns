/**
 * --tw-shadow-color: oklch(47.3% 0.137 46.201);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-amber-800) var(--tw-shadow-alpha), transparent);
 */
export const shadow_amber_800 = () => `
    --tw-shadow-color: oklch(47.3% 0.137 46.201);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-amber-800) var(--tw-shadow-alpha), transparent);
    `;
