/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-yellow-950);
 */
export const divide_yellow_950 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-yellow-950);
    `;
