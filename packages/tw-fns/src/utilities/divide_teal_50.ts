/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-teal-50);
 */
export const divide_teal_50 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-teal-50);
    `;
