/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-cyan-800);
 */
export const divide_cyan_800 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-cyan-800);
    `;
