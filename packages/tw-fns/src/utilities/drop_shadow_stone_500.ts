/**
 * --tw-drop-shadow-color: oklch(55.3% 0.013 58.071);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-500) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_stone_500 = () => `
    --tw-drop-shadow-color: oklch(55.3% 0.013 58.071);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-500) var(--tw-drop-shadow-alpha), transparent);
    `;
