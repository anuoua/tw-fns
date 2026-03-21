/**
 * --tw-drop-shadow-color: oklch(55.5% 0.163 48.998);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-amber-700) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_amber_700 = () => `
    --tw-drop-shadow-color: oklch(55.5% 0.163 48.998);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-amber-700) var(--tw-drop-shadow-alpha), transparent);
    `;
