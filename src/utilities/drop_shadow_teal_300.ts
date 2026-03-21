/**
 * --tw-drop-shadow-color: oklch(85.5% 0.138 181.071);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-300) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_teal_300 = () => `
    --tw-drop-shadow-color: oklch(85.5% 0.138 181.071);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-teal-300) var(--tw-drop-shadow-alpha), transparent);
    `;
