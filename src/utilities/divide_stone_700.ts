/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-stone-700);
 */
export const divide_stone_700 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-stone-700);
    `;
