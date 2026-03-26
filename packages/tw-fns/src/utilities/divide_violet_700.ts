/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-violet-700);
 */
export const divide_violet_700 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-violet-700);
    `;
