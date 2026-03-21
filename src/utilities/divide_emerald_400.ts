/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-emerald-400);
 */
export const divide_emerald_400 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-emerald-400);
    `;
