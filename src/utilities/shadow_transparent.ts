/**
 * --tw-shadow-color: transparent;
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, transparent var(--tw-shadow-alpha), transparent);
 */
export const shadow_transparent = () => `
    --tw-shadow-color: transparent;
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, transparent var(--tw-shadow-alpha), transparent);
    `;
