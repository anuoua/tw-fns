/**
 * --tw-shadow-color: oklch(41.4% 0.112 45.904);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-amber-900) var(--tw-shadow-alpha), transparent);
 */
export const shadow_amber_900 = () => `
    --tw-shadow-color: oklch(41.4% 0.112 45.904);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-amber-900) var(--tw-shadow-alpha), transparent);
    `;
