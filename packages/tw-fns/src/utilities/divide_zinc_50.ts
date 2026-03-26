/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-zinc-50);
 */
export const divide_zinc_50 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-50);
    `;
