/**
 * --tw-drop-shadow-color: transparent;
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, transparent var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_transparent = () => `
    --tw-drop-shadow-color: transparent;
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, transparent var(--tw-drop-shadow-alpha), transparent);
    `;
