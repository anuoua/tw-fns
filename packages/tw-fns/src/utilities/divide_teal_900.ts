/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-teal-900);
 */
export const divide_teal_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-teal-900);
    `;
