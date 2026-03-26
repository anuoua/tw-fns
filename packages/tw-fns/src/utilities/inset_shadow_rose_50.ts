/**
 * --tw-inset-shadow-color: oklch(96.9% 0.015 12.422);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-rose-50) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_rose_50 = () => `
    --tw-inset-shadow-color: oklch(96.9% 0.015 12.422);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-rose-50) var(--tw-inset-shadow-alpha), transparent);
    `;
