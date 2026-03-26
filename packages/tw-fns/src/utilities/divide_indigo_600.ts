/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-indigo-600);
 */
export const divide_indigo_600 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-indigo-600);
    `;
