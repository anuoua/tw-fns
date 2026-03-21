/**
 * --tw-shadow-color: oklch(96.9% 0.015 12.422);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-rose-50) var(--tw-shadow-alpha), transparent);
 */
export const shadow_rose_50 = () => `
    --tw-shadow-color: oklch(96.9% 0.015 12.422);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-rose-50) var(--tw-shadow-alpha), transparent);
    `;
