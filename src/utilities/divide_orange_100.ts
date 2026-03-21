/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-orange-100);
 */
export const divide_orange_100 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-orange-100);
    `;
