/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-gray-800);
 */
export const divide_gray_800 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-gray-800);
    `;
