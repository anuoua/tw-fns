/**
 * --tw-gradient-position: to top left;
 *
 * @supports (background-image: linear-gradient(in lab, red, red)) {
 *
 * --tw-gradient-position: to top left in oklab;
 */
export const bg_linear_to_tl = () => `
    --tw-gradient-position: to top left;
    @supports (background-image: linear-gradient(in lab, red, red)) {
      --tw-gradient-position: to top left in oklab;
    `;
