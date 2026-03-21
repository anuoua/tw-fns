/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-gray-500);
 */
export const divide_gray_500 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-gray-500);
    `;
