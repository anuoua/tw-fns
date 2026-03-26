/**
 * --tw-drop-shadow-color: oklch(43.2% 0.095 166.913);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-emerald-800) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_emerald_800 = () => `
    --tw-drop-shadow-color: oklch(43.2% 0.095 166.913);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-emerald-800) var(--tw-drop-shadow-alpha), transparent);
    `;
