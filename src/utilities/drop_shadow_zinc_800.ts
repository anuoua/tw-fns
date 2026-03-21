/**
 * --tw-drop-shadow-color: oklch(27.4% 0.006 286.033);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-zinc-800) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_zinc_800 = () => `
    --tw-drop-shadow-color: oklch(27.4% 0.006 286.033);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-zinc-800) var(--tw-drop-shadow-alpha), transparent);
    `;
