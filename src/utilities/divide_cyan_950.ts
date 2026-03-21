/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-cyan-950);
 */
export const divide_cyan_950 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-cyan-950);
    `;
