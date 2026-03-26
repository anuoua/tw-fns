/**
 * --tw-drop-shadow-color: oklch(97.9% 0.021 166.113);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-emerald-50) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_emerald_50 = () => `
    --tw-drop-shadow-color: oklch(97.9% 0.021 166.113);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-emerald-50) var(--tw-drop-shadow-alpha), transparent);
    `;
