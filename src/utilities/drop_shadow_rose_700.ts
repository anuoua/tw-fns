/**
 * --tw-drop-shadow-color: oklch(51.4% 0.222 16.935);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-rose-700) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_rose_700 = () => `
    --tw-drop-shadow-color: oklch(51.4% 0.222 16.935);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-rose-700) var(--tw-drop-shadow-alpha), transparent);
    `;
