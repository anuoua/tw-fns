/**
 * --tw-drop-shadow-color: oklch(27.9% 0.077 45.635);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-amber-950) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_amber_950 = () => `
    --tw-drop-shadow-color: oklch(27.9% 0.077 45.635);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-amber-950) var(--tw-drop-shadow-alpha), transparent);
    `;
