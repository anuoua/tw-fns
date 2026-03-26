/**
 * --tw-drop-shadow-color: oklch(45.9% 0.187 3.815);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-pink-800) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_pink_800 = () => `
    --tw-drop-shadow-color: oklch(45.9% 0.187 3.815);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-pink-800) var(--tw-drop-shadow-alpha), transparent);
    `;
