/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-emerald-500);
 */
export const divide_emerald_500 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-emerald-500);
    `;
