/**
 * - :where(& > :not(:last-child)) {
 * - border-color: inherit;
 */
export const divide_inherit = () => `  :where(& > :not(:last-child)) {
  border-color: inherit;`;
