/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-pink-900);
 */
export const divide_pink_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-pink-900);
    `;
