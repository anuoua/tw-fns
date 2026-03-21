/**
 * --tw-drop-shadow-color: oklch(90.3% 0.076 319.62);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-fuchsia-200) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_fuchsia_200 = () => `
    --tw-drop-shadow-color: oklch(90.3% 0.076 319.62);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-fuchsia-200) var(--tw-drop-shadow-alpha), transparent);
    `;
