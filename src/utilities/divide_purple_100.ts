/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-purple-100);
 */
export const divide_purple_100 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-purple-100);
    `;
