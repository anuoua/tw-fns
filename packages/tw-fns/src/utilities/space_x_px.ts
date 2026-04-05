/**
 * - :where(& > :not(:last-child)) {
 * - --tw-space-x-reverse: 0;
 * - margin-inline-start: calc(1px * var(--tw-space-x-reverse));
 * - margin-inline-end: calc(1px * calc(1 - var(--tw-space-x-reverse)));
 */
export const space_x_px = () => `  :where(& > :not(:last-child)) {
  --tw-space-x-reverse: 0;
  margin-inline-start: calc(1px * var(--tw-space-x-reverse));
  margin-inline-end: calc(1px * calc(1 - var(--tw-space-x-reverse)));`;
