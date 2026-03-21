/**
 * --tw-drop-shadow-color: oklch(55.8% 0.288 302.321);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-purple-600) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_purple_600 = () => `
    --tw-drop-shadow-color: oklch(55.8% 0.288 302.321);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-purple-600) var(--tw-drop-shadow-alpha), transparent);
    `;
