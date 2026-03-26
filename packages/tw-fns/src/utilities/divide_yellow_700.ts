/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-yellow-700);
 */
export const divide_yellow_700 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-yellow-700);
    `;
