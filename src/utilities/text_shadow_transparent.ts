/**
 * --tw-text-shadow-color: transparent;
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, transparent var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_transparent = () => `
    --tw-text-shadow-color: transparent;
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, transparent var(--tw-text-shadow-alpha), transparent);
    `;
