/**
 * --tw-inset-shadow-color: oklch(41.4% 0.112 45.904);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-amber-900) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_amber_900 = () => `
    --tw-inset-shadow-color: oklch(41.4% 0.112 45.904);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-amber-900) var(--tw-inset-shadow-alpha), transparent);
    `;
