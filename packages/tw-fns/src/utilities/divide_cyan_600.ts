/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-cyan-600);
 */
export const divide_cyan_600 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-cyan-600);
    `;
