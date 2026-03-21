/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-indigo-100);
 */
export const divide_indigo_100 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-indigo-100);
    `;
