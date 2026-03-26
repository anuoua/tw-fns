/**
 * --tw-shadow-color: oklch(47.6% 0.114 61.907);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-yellow-800) var(--tw-shadow-alpha), transparent);
 */
export const shadow_yellow_800 = () => `
    --tw-shadow-color: oklch(47.6% 0.114 61.907);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-yellow-800) var(--tw-shadow-alpha), transparent);
    `;
