/**
 * --tw-shadow-color: oklch(43.2% 0.232 292.759);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-violet-800) var(--tw-shadow-alpha), transparent);
 */
export const shadow_violet_800 = () => `
    --tw-shadow-color: oklch(43.2% 0.232 292.759);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-violet-800) var(--tw-shadow-alpha), transparent);
    `;
