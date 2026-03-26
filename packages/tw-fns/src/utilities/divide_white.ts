/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-white);
 */
export const divide_white = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-white);
    `;
