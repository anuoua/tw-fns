/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-yellow-300);
 */
export const divide_yellow_300 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-yellow-300);
    `;
