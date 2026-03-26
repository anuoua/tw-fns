/**
 * --tw-gradient-position: calc(270deg * -1);
 *
 * @supports (background-image: linear-gradient(in lab, red, red)) {
 *
 * --tw-gradient-position: calc(270deg * -1) in oklab;
 */
export const _bg_linear_270 = () => `
    --tw-gradient-position: calc(270deg * -1);
    @supports (background-image: linear-gradient(in lab, red, red)) {
      --tw-gradient-position: calc(270deg * -1) in oklab;
    `;
