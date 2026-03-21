/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-indigo-500);
 */
export const divide_indigo_500 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-indigo-500);
    `;
