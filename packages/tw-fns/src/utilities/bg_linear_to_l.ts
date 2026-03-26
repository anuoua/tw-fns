/**
 * --tw-gradient-position: to left;
 *
 * @supports (background-image: linear-gradient(in lab, red, red)) {
 *
 * --tw-gradient-position: to left in oklab;
 */
export const bg_linear_to_l = () => `
    --tw-gradient-position: to left;
    @supports (background-image: linear-gradient(in lab, red, red)) {
      --tw-gradient-position: to left in oklab;
    `;
