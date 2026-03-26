/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-emerald-300);
 */
export const divide_emerald_300 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-emerald-300);
    `;
