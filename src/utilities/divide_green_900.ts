/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-green-900);
 */
export const divide_green_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-green-900);
    `;
