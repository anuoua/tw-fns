/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-purple-700);
 */
export const divide_purple_700 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-purple-700);
    `;
