/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-indigo-400);
 */
export const divide_indigo_400 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-indigo-400);
    `;
