/**
 * --tw-drop-shadow-color: oklch(14.7% 0.004 49.25);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-950) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_stone_950 = () => `
    --tw-drop-shadow-color: oklch(14.7% 0.004 49.25);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-stone-950) var(--tw-drop-shadow-alpha), transparent);
    `;
