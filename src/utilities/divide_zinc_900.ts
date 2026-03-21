/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-zinc-900);
 */
export const divide_zinc_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-900);
    `;
