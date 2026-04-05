/**
 * - --tw-gradient-position: to bottom right;
 * - @supports (background-image: linear-gradient(in lab, red, red)) {
 * - --tw-gradient-position: to bottom right in oklab;
 */
export const bg_linear_to_br = () => `  --tw-gradient-position: to bottom right;
  @supports (background-image: linear-gradient(in lab, red, red)) {
  --tw-gradient-position: to bottom right in oklab;`;
