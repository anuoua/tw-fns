/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-stone-200);
 */
export const divide_stone_200 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-stone-200);
    `;
