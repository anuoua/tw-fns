/**
 * --tw-text-shadow-color: currentcolor;
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, currentcolor var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_current = () => `
    --tw-text-shadow-color: currentcolor;
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, currentcolor var(--tw-text-shadow-alpha), transparent);
    `;
