/**
 * - --tw-gradient-position: to bottom left;
 * - @supports (background-image: linear-gradient(in lab, red, red)) {
 * - --tw-gradient-position: to bottom left in oklab;
 */
export const bg_linear_to_bl = () => `  --tw-gradient-position: to bottom left;
  @supports (background-image: linear-gradient(in lab, red, red)) {
  --tw-gradient-position: to bottom left in oklab;`;
