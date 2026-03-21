/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-purple-600);
 */
export const divide_purple_600 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-purple-600);
    `;
