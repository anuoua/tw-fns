/**
 * --tw-drop-shadow-color: oklch(98.4% 0.003 247.858);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-slate-50) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_slate_50 = () => `
    --tw-drop-shadow-color: oklch(98.4% 0.003 247.858);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-slate-50) var(--tw-drop-shadow-alpha), transparent);
    `;
