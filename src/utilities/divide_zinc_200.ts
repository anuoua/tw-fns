/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-zinc-200);
 */
export const divide_zinc_200 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-200);
    `;
