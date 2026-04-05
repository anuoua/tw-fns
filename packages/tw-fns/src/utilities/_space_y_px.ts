/**
 * - :where(& > :not(:last-child)) {
 * - --tw-space-y-reverse: 0;
 * - margin-block-start: calc(-1px * var(--tw-space-y-reverse));
 * - margin-block-end: calc(-1px * calc(1 - var(--tw-space-y-reverse)));
 */
export const _space_y_px = () => `  :where(& > :not(:last-child)) {
  --tw-space-y-reverse: 0;
  margin-block-start: calc(-1px * var(--tw-space-y-reverse));
  margin-block-end: calc(-1px * calc(1 - var(--tw-space-y-reverse)));`;
