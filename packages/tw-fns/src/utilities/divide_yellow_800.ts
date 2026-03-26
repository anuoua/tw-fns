/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-yellow-800);
 */
export const divide_yellow_800 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-yellow-800);
    `;
