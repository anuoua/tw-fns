/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-green-600);
 */
export const divide_green_600 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-green-600);
    `;
