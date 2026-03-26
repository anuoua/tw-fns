/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-zinc-950);
 */
export const divide_zinc_950 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-950);
    `;
