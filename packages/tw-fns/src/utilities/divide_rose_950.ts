/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-rose-950);
 */
export const divide_rose_950 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-rose-950);
    `;
