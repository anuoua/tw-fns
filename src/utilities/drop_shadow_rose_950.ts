/**
 * --tw-drop-shadow-color: oklch(27.1% 0.105 12.094);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-rose-950) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_rose_950 = () => `
    --tw-drop-shadow-color: oklch(27.1% 0.105 12.094);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-rose-950) var(--tw-drop-shadow-alpha), transparent);
    `;
