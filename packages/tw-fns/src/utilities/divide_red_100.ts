/**
 * - :where(& > :not(:last-child)) {
 * - border-color: var(--color-red-100);
 */
export const divide_red_100 = () => `  :where(& > :not(:last-child)) {
  border-color: var(--color-red-100);`;
