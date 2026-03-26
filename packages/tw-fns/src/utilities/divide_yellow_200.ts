/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-yellow-200);
 */
export const divide_yellow_200 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-yellow-200);
    `;
