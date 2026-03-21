/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-teal-400);
 */
export const divide_teal_400 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-teal-400);
    `;
