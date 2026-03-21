/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-purple-50);
 */
export const divide_purple_50 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-purple-50);
    `;
