/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-orange-900);
 */
export const divide_orange_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-orange-900);
    `;
