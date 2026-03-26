/**
 * --tw-gradient-position: to top;
 *
 * @supports (background-image: linear-gradient(in lab, red, red)) {
 *
 * --tw-gradient-position: to top in oklab;
 */
export const bg_linear_to_t = () => `
    --tw-gradient-position: to top;
    @supports (background-image: linear-gradient(in lab, red, red)) {
      --tw-gradient-position: to top in oklab;
    `;
