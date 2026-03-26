/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-gray-900);
 */
export const divide_gray_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-gray-900);
    `;
