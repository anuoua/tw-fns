/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-teal-300);
 */
export const divide_teal_300 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-teal-300);
    `;
