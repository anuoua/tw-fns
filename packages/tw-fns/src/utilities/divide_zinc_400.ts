/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-zinc-400);
 */
export const divide_zinc_400 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-400);
    `;
