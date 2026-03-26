/**
 * --tw-drop-shadow-color: oklch(21.6% 0.006 56.043);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-900) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_stone_900 = () => `
    --tw-drop-shadow-color: oklch(21.6% 0.006 56.043);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-900) var(--tw-drop-shadow-alpha), transparent);
    `;
