/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-rose-900);
 */
export const divide_rose_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-rose-900);
    `;
