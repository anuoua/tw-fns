/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-purple-400);
 */
export const divide_purple_400 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-purple-400);
    `;
