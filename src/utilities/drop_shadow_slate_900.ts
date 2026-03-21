/**
 * --tw-drop-shadow-color: oklch(20.8% 0.042 265.755);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-slate-900) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_slate_900 = () => `
    --tw-drop-shadow-color: oklch(20.8% 0.042 265.755);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-slate-900) var(--tw-drop-shadow-alpha), transparent);
    `;
