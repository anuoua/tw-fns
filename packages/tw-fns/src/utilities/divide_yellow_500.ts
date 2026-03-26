/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-yellow-500);
 */
export const divide_yellow_500 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-yellow-500);
    `;
