/**
 * --tw-drop-shadow-color: oklch(93% 0.034 272.788);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-indigo-100) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_indigo_100 = () => `
    --tw-drop-shadow-color: oklch(93% 0.034 272.788);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-indigo-100) var(--tw-drop-shadow-alpha), transparent);
    `;
