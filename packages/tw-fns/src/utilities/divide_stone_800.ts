/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-stone-800);
 */
export const divide_stone_800 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-stone-800);
    `;
