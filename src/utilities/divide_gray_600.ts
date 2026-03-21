/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-gray-600);
 */
export const divide_gray_600 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-gray-600);
    `;
