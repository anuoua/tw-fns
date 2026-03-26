/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-stone-100);
 */
export const divide_stone_100 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-stone-100);
    `;
