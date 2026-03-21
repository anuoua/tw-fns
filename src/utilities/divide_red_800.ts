/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-red-800);
 */
export const divide_red_800 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-red-800);
    `;
