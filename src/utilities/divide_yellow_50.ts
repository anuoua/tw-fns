/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-yellow-50);
 */
export const divide_yellow_50 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-yellow-50);
    `;
