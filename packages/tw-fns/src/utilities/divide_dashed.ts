/**
 * - :where(& > :not(:last-child)) {
 * - --tw-border-style: dashed;
 * - border-style: dashed;
 */
export const divide_dashed = () => `  :where(& > :not(:last-child)) {
  --tw-border-style: dashed;
  border-style: dashed;`;
