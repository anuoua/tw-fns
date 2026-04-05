/**
 * - :where(& > :not(:last-child)) {
 * - border-color: var(--color-black);
 */
export const divide_black = () => `  :where(& > :not(:last-child)) {
  border-color: var(--color-black);`;
