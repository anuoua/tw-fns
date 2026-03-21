/**
 * --tw-inset-shadow-color: oklch(71.4% 0.203 305.504);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-purple-400) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_purple_400 = () => `
    --tw-inset-shadow-color: oklch(71.4% 0.203 305.504);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-purple-400) var(--tw-inset-shadow-alpha), transparent);
    `;
