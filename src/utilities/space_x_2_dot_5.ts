/**
 * :where(& > :not(:last-child)) {
 *
 * --tw-space-x-reverse: 0;
 *
 * margin-inline-start: calc(calc(var(--spacing) * 2.5) * var(--tw-space-x-reverse));
 *
 * margin-inline-end: calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-x-reverse)));
 */
export const space_x_2_dot_5 = () => `
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 2.5) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-x-reverse)));
    `;
