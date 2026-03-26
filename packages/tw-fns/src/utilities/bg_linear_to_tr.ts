/**
 * --tw-gradient-position: to top right;
 *
 * @supports (background-image: linear-gradient(in lab, red, red)) {
 *
 * --tw-gradient-position: to top right in oklab;
 */
export const bg_linear_to_tr = () => `
    --tw-gradient-position: to top right;
    @supports (background-image: linear-gradient(in lab, red, red)) {
      --tw-gradient-position: to top right in oklab;
    `;
