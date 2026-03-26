/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-violet-300);
 */
export const divide_violet_300 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-violet-300);
    `;
