/**
 * :where(& > :not(:last-child)) {
 *
 * --tw-space-x-reverse: 0;
 *
 * margin-inline-start: calc(calc(var(--spacing) * -80) * var(--tw-space-x-reverse));
 *
 * margin-inline-end: calc(calc(var(--spacing) * -80) * calc(1 - var(--tw-space-x-reverse)));
 */
export const _space_x_80 = () => `
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * -80) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * -80) * calc(1 - var(--tw-space-x-reverse)));
    `;
