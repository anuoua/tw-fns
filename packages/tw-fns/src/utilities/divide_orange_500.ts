/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-orange-500);
 */
export const divide_orange_500 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-orange-500);
    `;
