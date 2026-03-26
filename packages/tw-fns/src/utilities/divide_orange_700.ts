/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-orange-700);
 */
export const divide_orange_700 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-orange-700);
    `;
