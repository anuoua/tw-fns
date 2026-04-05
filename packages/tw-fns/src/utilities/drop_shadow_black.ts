/**
 * - --tw-drop-shadow-color: #000;
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-drop-shadow-color: color-mix(in oklab, var(--color-black) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_black = () => `  --tw-drop-shadow-color: #000;
  @supports (color: color-mix(in lab, red, red)) {
  --tw-drop-shadow-color: color-mix(in oklab, var(--color-black) var(--tw-drop-shadow-alpha), transparent);`;
