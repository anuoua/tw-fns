/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-red-300);
 */
export const divide_red_300 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-red-300);
    `;
