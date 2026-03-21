/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-purple-950);
 */
export const divide_purple_950 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-purple-950);
    `;
