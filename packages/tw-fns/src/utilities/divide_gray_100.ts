/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-gray-100);
 */
export const divide_gray_100 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-gray-100);
    `;
