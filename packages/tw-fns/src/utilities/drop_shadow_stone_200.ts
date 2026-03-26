/**
 * --tw-drop-shadow-color: oklch(92.3% 0.003 48.717);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-200) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_stone_200 = () => `
    --tw-drop-shadow-color: oklch(92.3% 0.003 48.717);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-200) var(--tw-drop-shadow-alpha), transparent);
    `;
