/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-stone-950);
 */
export const divide_stone_950 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-stone-950);
    `;
