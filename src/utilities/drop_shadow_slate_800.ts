/**
 * --tw-drop-shadow-color: oklch(27.9% 0.041 260.031);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-slate-800) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_slate_800 = () => `
    --tw-drop-shadow-color: oklch(27.9% 0.041 260.031);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-slate-800) var(--tw-drop-shadow-alpha), transparent);
    `;
