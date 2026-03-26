/**
 * :where(& > :not(:last-child)) {
 *
 * --tw-divide-x-reverse: 0;
 *
 * border-inline-style: var(--tw-border-style);
 *
 * border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));
 *
 * border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
 */
export const divide_x = () => `
    :where(& > :not(:last-child)) {
      --tw-divide-x-reverse: 0;
      border-inline-style: var(--tw-border-style);
      border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));
      border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
    `;
