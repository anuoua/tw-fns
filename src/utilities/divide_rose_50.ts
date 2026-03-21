/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-rose-50);
 */
export const divide_rose_50 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-rose-50);
    `;
