/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-emerald-900);
 */
export const divide_emerald_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-emerald-900);
    `;
