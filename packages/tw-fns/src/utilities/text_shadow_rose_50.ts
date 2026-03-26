/**
 * --tw-text-shadow-color: oklch(96.9% 0.015 12.422);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-rose-50) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_rose_50 = () => `
    --tw-text-shadow-color: oklch(96.9% 0.015 12.422);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-rose-50) var(--tw-text-shadow-alpha), transparent);
    `;
