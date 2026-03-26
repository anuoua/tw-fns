/**
 * --tw-gradient-position: calc(60deg * -1);
 *
 * @supports (background-image: linear-gradient(in lab, red, red)) {
 *
 * --tw-gradient-position: calc(60deg * -1) in oklab;
 */
export const _bg_linear_60 = () => `
    --tw-gradient-position: calc(60deg * -1);
    @supports (background-image: linear-gradient(in lab, red, red)) {
      --tw-gradient-position: calc(60deg * -1) in oklab;
    `;
