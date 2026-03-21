/**
 * --tw-drop-shadow-color: oklch(94.1% 0.03 12.58);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-rose-100) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_rose_100 = () => `
    --tw-drop-shadow-color: oklch(94.1% 0.03 12.58);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-rose-100) var(--tw-drop-shadow-alpha), transparent);
    `;
