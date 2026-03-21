/**
 * --tw-drop-shadow-color: oklch(96.7% 0.001 286.375);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-zinc-100) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_zinc_100 = () => `
    --tw-drop-shadow-color: oklch(96.7% 0.001 286.375);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-zinc-100) var(--tw-drop-shadow-alpha), transparent);
    `;
