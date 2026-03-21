/**
 * --tw-drop-shadow-color: oklch(14.1% 0.005 285.823);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-zinc-950) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_zinc_950 = () => `
    --tw-drop-shadow-color: oklch(14.1% 0.005 285.823);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-zinc-950) var(--tw-drop-shadow-alpha), transparent);
    `;
