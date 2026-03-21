/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-stone-900);
 */
export const divide_stone_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-stone-900);
    `;
