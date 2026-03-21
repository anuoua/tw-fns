/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-blue-600);
 */
export const divide_blue_600 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-blue-600);
    `;
