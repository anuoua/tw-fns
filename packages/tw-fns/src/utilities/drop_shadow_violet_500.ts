/**
 * --tw-drop-shadow-color: oklch(60.6% 0.25 292.717);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-violet-500) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_violet_500 = () => `
    --tw-drop-shadow-color: oklch(60.6% 0.25 292.717);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-violet-500) var(--tw-drop-shadow-alpha), transparent);
    `;
