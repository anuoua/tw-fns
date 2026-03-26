/**
 * --tw-gradient-position: 120deg;
 *
 * @supports (background-image: linear-gradient(in lab, red, red)) {
 *
 * --tw-gradient-position: 120deg in oklab;
 */
export const bg_linear_120 = () => `
    --tw-gradient-position: 120deg;
    @supports (background-image: linear-gradient(in lab, red, red)) {
      --tw-gradient-position: 120deg in oklab;
    `;
