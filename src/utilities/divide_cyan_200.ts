/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-cyan-200);
 */
export const divide_cyan_200 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-cyan-200);
    `;
