/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-gray-950);
 */
export const divide_gray_950 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-gray-950);
    `;
