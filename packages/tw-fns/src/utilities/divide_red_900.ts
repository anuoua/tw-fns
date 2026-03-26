/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-red-900);
 */
export const divide_red_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-red-900);
    `;
