/**
 * --tw-drop-shadow-color: oklch(37% 0.013 285.805);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-zinc-700) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_zinc_700 = () => `
    --tw-drop-shadow-color: oklch(37% 0.013 285.805);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-zinc-700) var(--tw-drop-shadow-alpha), transparent);
    `;
