/**
 * :where(& > :not(:last-child)) {
 *
 * --tw-space-x-reverse: 0;
 *
 * margin-inline-start: calc(calc(var(--spacing) * -48) * var(--tw-space-x-reverse));
 *
 * margin-inline-end: calc(calc(var(--spacing) * -48) * calc(1 - var(--tw-space-x-reverse)));
 */
export const _space_x_48 = () => `
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * -48) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * -48) * calc(1 - var(--tw-space-x-reverse)));
    `;
