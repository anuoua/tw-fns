/**
 * --tw-gradient-position: 270deg;
 *
 * @supports (background-image: linear-gradient(in lab, red, red)) {
 *
 * --tw-gradient-position: 270deg in oklab;
 */
export const bg_linear_270 = () => `
    --tw-gradient-position: 270deg;
    @supports (background-image: linear-gradient(in lab, red, red)) {
      --tw-gradient-position: 270deg in oklab;
    `;
