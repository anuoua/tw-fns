/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-blue-950);
 */
export const divide_blue_950 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-blue-950);
    `;
