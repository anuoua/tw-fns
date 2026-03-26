/**
 * --tw-gradient-position: calc(90deg * -1);
 *
 * @supports (background-image: linear-gradient(in lab, red, red)) {
 *
 * --tw-gradient-position: calc(90deg * -1) in oklab;
 */
export const _bg_linear_90 = () => `
    --tw-gradient-position: calc(90deg * -1);
    @supports (background-image: linear-gradient(in lab, red, red)) {
      --tw-gradient-position: calc(90deg * -1) in oklab;
    `;
