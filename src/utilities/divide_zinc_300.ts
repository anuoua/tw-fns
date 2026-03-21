/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-zinc-300);
 */
export const divide_zinc_300 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-300);
    `;
