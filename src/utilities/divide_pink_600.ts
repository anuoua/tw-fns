/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-pink-600);
 */
export const divide_pink_600 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-pink-600);
    `;
