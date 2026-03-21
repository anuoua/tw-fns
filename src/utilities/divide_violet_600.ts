/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-violet-600);
 */
export const divide_violet_600 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-violet-600);
    `;
