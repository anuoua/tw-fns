/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-zinc-100);
 */
export const divide_zinc_100 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-100);
    `;
