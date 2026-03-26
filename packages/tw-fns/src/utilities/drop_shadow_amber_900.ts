/**
 * --tw-drop-shadow-color: oklch(41.4% 0.112 45.904);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-drop-shadow-color: color-mix(in oklab, var(--color-amber-900) var(--tw-drop-shadow-alpha), transparent);
 */
export const drop_shadow_amber_900 = () => `
    --tw-drop-shadow-color: oklch(41.4% 0.112 45.904);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-drop-shadow-color: color-mix(in oklab, var(--color-amber-900) var(--tw-drop-shadow-alpha), transparent);
    `;
