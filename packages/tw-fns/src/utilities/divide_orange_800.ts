/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-orange-800);
 */
export const divide_orange_800 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-orange-800);
    `;
