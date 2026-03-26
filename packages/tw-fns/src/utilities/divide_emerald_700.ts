/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-emerald-700);
 */
export const divide_emerald_700 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-emerald-700);
    `;
