/**
 * - :where(& > :not(:last-child)) {
 * - border-color: transparent;
 */
export const divide_transparent = () => `  :where(& > :not(:last-child)) {
  border-color: transparent;`;
