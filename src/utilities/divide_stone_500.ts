/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-stone-500);
 */
export const divide_stone_500 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-stone-500);
    `;
