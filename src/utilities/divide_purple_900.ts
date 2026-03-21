/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-purple-900);
 */
export const divide_purple_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-purple-900);
    `;
