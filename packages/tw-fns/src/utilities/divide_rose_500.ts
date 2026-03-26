/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-rose-500);
 */
export const divide_rose_500 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-rose-500);
    `;
