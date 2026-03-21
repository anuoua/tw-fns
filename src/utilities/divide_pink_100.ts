/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-pink-100);
 */
export const divide_pink_100 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-pink-100);
    `;
