/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-orange-300);
 */
export const divide_orange_300 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-orange-300);
    `;
