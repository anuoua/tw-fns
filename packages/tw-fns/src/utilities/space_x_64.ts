/**
 * - :where(& > :not(:last-child)) {
 * - --tw-space-x-reverse: 0;
 * - margin-inline-start: calc(calc(var(--spacing) * 64) * var(--tw-space-x-reverse));
 * - margin-inline-end: calc(calc(var(--spacing) * 64) * calc(1 - var(--tw-space-x-reverse)));
 */
export const space_x_64 = () => `  :where(& > :not(:last-child)) {
  --tw-space-x-reverse: 0;
  margin-inline-start: calc(calc(var(--spacing) * 64) * var(--tw-space-x-reverse));
  margin-inline-end: calc(calc(var(--spacing) * 64) * calc(1 - var(--tw-space-x-reverse)));`;
