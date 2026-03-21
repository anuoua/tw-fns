/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-orange-200);
 */
export const divide_orange_200 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-orange-200);
    `;
