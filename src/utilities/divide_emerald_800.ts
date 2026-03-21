/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-emerald-800);
 */
export const divide_emerald_800 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-emerald-800);
    `;
