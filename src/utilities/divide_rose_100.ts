/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-rose-100);
 */
export const divide_rose_100 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-rose-100);
    `;
