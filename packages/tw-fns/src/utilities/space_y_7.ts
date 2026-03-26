/**
 * :where(& > :not(:last-child)) {
 *
 * --tw-space-y-reverse: 0;
 *
 * margin-block-start: calc(calc(var(--spacing) * 7) * var(--tw-space-y-reverse));
 *
 * margin-block-end: calc(calc(var(--spacing) * 7) * calc(1 - var(--tw-space-y-reverse)));
 */
export const space_y_7 = () => `
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 7) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 7) * calc(1 - var(--tw-space-y-reverse)));
    `;
