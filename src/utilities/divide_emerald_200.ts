/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-emerald-200);
 */
export const divide_emerald_200 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-emerald-200);
    `;
