/**
 * --tw-drop-shadow-color: oklch(37.4% 0.01 67.558);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-700) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_stone_700 = () => `
    --tw-drop-shadow-color: oklch(37.4% 0.01 67.558);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-700) var(--tw-drop-shadow-alpha), transparent);
    `;
