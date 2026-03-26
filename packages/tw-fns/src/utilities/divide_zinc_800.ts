/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-zinc-800);
 */
export const divide_zinc_800 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-800);
    `;
