/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-blue-300);
 */
export const divide_blue_300 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-blue-300);
    `;
