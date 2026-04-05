/**
 * - :where(& > :not(:last-child)) {
 * - --tw-space-y-reverse: 0;
 * - margin-block-start: calc(calc(var(--spacing) * -24) * var(--tw-space-y-reverse));
 * - margin-block-end: calc(calc(var(--spacing) * -24) * calc(1 - var(--tw-space-y-reverse)));
 */
export const _space_y_24 = () => `  :where(& > :not(:last-child)) {
  --tw-space-y-reverse: 0;
  margin-block-start: calc(calc(var(--spacing) * -24) * var(--tw-space-y-reverse));
  margin-block-end: calc(calc(var(--spacing) * -24) * calc(1 - var(--tw-space-y-reverse)));`;
