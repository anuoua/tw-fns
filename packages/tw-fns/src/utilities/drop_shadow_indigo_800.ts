/**
 * --tw-drop-shadow-color: oklch(39.8% 0.195 277.366);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-indigo-800) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_indigo_800 = () => `
    --tw-drop-shadow-color: oklch(39.8% 0.195 277.366);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-indigo-800) var(--tw-drop-shadow-alpha), transparent);
    `;
