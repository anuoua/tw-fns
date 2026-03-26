/**
 * --tw-drop-shadow-color: oklch(92.2% 0 0);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-neutral-200) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_neutral_200 = () => `
    --tw-drop-shadow-color: oklch(92.2% 0 0);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-neutral-200) var(--tw-drop-shadow-alpha), transparent);
    `;
