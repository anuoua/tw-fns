/**
 * --tw-drop-shadow-color: oklch(12.9% 0.042 264.695);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-slate-950) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_slate_950 = () => `
    --tw-drop-shadow-color: oklch(12.9% 0.042 264.695);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-slate-950) var(--tw-drop-shadow-alpha), transparent);
    `;
