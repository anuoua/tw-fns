/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-stone-300);
 */
export const divide_stone_300 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-stone-300);
    `;
