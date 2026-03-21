/**
 * --tw-gradient-position: to bottom;
 *
 * @supports (background-image: linear-gradient(in lab, red, red)) {
 *
 * --tw-gradient-position: to bottom in oklab;
 */
export const bg_linear_to_b = () => `
    --tw-gradient-position: to bottom;
    @supports (background-image: linear-gradient(in lab, red, red)) {
      --tw-gradient-position: to bottom in oklab;
    `;
