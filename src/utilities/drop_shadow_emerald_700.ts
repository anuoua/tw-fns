/**
 * --tw-drop-shadow-color: oklch(50.8% 0.118 165.612);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-emerald-700) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_emerald_700 = () => `
    --tw-drop-shadow-color: oklch(50.8% 0.118 165.612);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-emerald-700) var(--tw-drop-shadow-alpha), transparent);
    `;
