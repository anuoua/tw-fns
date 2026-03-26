/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-red-700);
 */
export const divide_red_700 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-red-700);
    `;
