/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-green-500);
 */
export const divide_green_500 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-green-500);
    `;
