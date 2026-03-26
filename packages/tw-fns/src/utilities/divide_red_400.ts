/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-red-400);
 */
export const divide_red_400 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-red-400);
    `;
