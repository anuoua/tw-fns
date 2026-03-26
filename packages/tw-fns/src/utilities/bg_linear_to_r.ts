/**
 * --tw-gradient-position: to right;
 *
 * @supports (background-image: linear-gradient(in lab, red, red)) {
 *
 * --tw-gradient-position: to right in oklab;
 */
export const bg_linear_to_r = () => `
    --tw-gradient-position: to right;
    @supports (background-image: linear-gradient(in lab, red, red)) {
      --tw-gradient-position: to right in oklab;
    `;
