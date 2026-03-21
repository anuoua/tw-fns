/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-teal-600);
 */
export const divide_teal_600 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-teal-600);
    `;
