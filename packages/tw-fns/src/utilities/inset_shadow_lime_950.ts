/**
 * --tw-inset-shadow-color: oklch(27.4% 0.072 132.109);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-lime-950) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_lime_950 = () => `
    --tw-inset-shadow-color: oklch(27.4% 0.072 132.109);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-lime-950) var(--tw-inset-shadow-alpha), transparent);
    `;
