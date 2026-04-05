/**
 * - --tw-drop-shadow-color: #fff;
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-drop-shadow-color: color-mix(in oklab, var(--color-white) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_white = () => `  --tw-drop-shadow-color: #fff;
  @supports (color: color-mix(in lab, red, red)) {
  --tw-drop-shadow-color: color-mix(in oklab, var(--color-white) var(--tw-drop-shadow-alpha), transparent);`;
