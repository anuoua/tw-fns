/**
 * --tw-drop-shadow-color: oklch(40.8% 0.153 2.432);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-pink-900) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_pink_900 = () => `
    --tw-drop-shadow-color: oklch(40.8% 0.153 2.432);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-pink-900) var(--tw-drop-shadow-alpha), transparent);
    `;
