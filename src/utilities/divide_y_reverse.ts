/**
 * :where(& > :not(:last-child)) {
 *
 * --tw-divide-y-reverse: 1;
 */
export const divide_y_reverse = () => `
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 1;
    `;
