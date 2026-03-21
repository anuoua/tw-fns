/**
 * --tw-gradient-position: 180deg;
 *
 * @supports (background-image: linear-gradient(in lab, red, red)) {
 *
 * --tw-gradient-position: 180deg in oklab;
 */
export const bg_linear_180 = () => `
    --tw-gradient-position: 180deg;
    @supports (background-image: linear-gradient(in lab, red, red)) {
      --tw-gradient-position: 180deg in oklab;
    `;
