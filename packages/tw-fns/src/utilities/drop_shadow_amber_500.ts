/**
 * --tw-drop-shadow-color: oklch(76.9% 0.188 70.08);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-amber-500) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_amber_500 = () => `
    --tw-drop-shadow-color: oklch(76.9% 0.188 70.08);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-amber-500) var(--tw-drop-shadow-alpha), transparent);
    `;
