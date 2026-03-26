/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-violet-900);
 */
export const divide_violet_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-violet-900);
    `;
