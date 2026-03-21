/**
 * --tw-drop-shadow-color: oklch(43.7% 0.078 188.216);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-800) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_teal_800 = () => `
    --tw-drop-shadow-color: oklch(43.7% 0.078 188.216);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-800) var(--tw-drop-shadow-alpha), transparent);
    `;
