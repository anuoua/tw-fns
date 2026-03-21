/**
 * --tw-drop-shadow-color: oklch(70.9% 0.01 56.259);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-400) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_stone_400 = () => `
    --tw-drop-shadow-color: oklch(70.9% 0.01 56.259);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-400) var(--tw-drop-shadow-alpha), transparent);
    `;
