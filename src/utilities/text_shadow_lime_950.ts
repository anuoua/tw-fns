/**
 * --tw-text-shadow-color: oklch(27.4% 0.072 132.109);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-lime-950) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_lime_950 = () => `
    --tw-text-shadow-color: oklch(27.4% 0.072 132.109);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-lime-950) var(--tw-text-shadow-alpha), transparent);
    `;
