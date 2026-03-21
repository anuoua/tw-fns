/**
 * --tw-drop-shadow-color: oklch(90.5% 0.093 164.15);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-emerald-200) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_emerald_200 = () => `
    --tw-drop-shadow-color: oklch(90.5% 0.093 164.15);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-emerald-200) var(--tw-drop-shadow-alpha), transparent);
    `;
