/**
 * --tw-drop-shadow-color: oklch(64.5% 0.246 16.439);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-rose-500) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_rose_500 = () => `
    --tw-drop-shadow-color: oklch(64.5% 0.246 16.439);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-rose-500) var(--tw-drop-shadow-alpha), transparent);
    `;
