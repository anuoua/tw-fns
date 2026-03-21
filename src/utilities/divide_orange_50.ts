/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-orange-50);
 */
export const divide_orange_50 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-orange-50);
    `;
