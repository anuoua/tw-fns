/**
 * - :where(& > :not(:last-child)) {
 * - --tw-space-y-reverse: 0;
 * - margin-block-start: calc(calc(var(--spacing) * 48) * var(--tw-space-y-reverse));
 * - margin-block-end: calc(calc(var(--spacing) * 48) * calc(1 - var(--tw-space-y-reverse)));
 */
export const space_y_48 = () => `  :where(& > :not(:last-child)) {
  --tw-space-y-reverse: 0;
  margin-block-start: calc(calc(var(--spacing) * 48) * var(--tw-space-y-reverse));
  margin-block-end: calc(calc(var(--spacing) * 48) * calc(1 - var(--tw-space-y-reverse)));`;
