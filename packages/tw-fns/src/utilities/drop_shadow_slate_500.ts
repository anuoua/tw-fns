/**
 * --tw-drop-shadow-color: oklch(55.4% 0.046 257.417);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-slate-500) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_slate_500 = () => `
    --tw-drop-shadow-color: oklch(55.4% 0.046 257.417);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-slate-500) var(--tw-drop-shadow-alpha), transparent);
    `;
