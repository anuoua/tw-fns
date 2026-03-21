/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-rose-400);
 */
export const divide_rose_400 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-rose-400);
    `;
