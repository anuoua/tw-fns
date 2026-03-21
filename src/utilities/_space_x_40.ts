/**
 * :where(& > :not(:last-child)) {
 *
 * --tw-space-x-reverse: 0;
 *
 * margin-inline-start: calc(calc(var(--spacing) * -40) * var(--tw-space-x-reverse));
 *
 * margin-inline-end: calc(calc(var(--spacing) * -40) * calc(1 - var(--tw-space-x-reverse)));
 */
export const _space_x_40 = () => `
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * -40) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * -40) * calc(1 - var(--tw-space-x-reverse)));
    `;
