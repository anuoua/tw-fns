/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-indigo-700);
 */
export const divide_indigo_700 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-indigo-700);
    `;
