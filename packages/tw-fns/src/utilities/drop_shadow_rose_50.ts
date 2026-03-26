/**
 * --tw-drop-shadow-color: oklch(96.9% 0.015 12.422);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-rose-50) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_rose_50 = () => `
    --tw-drop-shadow-color: oklch(96.9% 0.015 12.422);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-rose-50) var(--tw-drop-shadow-alpha), transparent);
    `;
