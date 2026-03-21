/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-cyan-400);
 */
export const divide_cyan_400 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-cyan-400);
    `;
