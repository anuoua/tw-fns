/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-yellow-900);
 */
export const divide_yellow_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-yellow-900);
    `;
