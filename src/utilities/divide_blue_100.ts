/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-blue-100);
 */
export const divide_blue_100 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-blue-100);
    `;
