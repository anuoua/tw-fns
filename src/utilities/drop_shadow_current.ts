/**
 * --tw-drop-shadow-color: currentcolor;
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, currentcolor var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_current = () => `
    --tw-drop-shadow-color: currentcolor;
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, currentcolor var(--tw-drop-shadow-alpha), transparent);
    `;
