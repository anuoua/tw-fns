/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-green-300);
 */
export const divide_green_300 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-green-300);
    `;
