/**
 * :where(& > :not(:last-child)) {
 *
 * --tw-divide-y-reverse: 0;
 *
 * border-bottom-style: var(--tw-border-style);
 *
 * border-top-style: var(--tw-border-style);
 *
 * border-top-width: calc(0px * var(--tw-divide-y-reverse));
 *
 * border-bottom-width: calc(0px * calc(1 - var(--tw-divide-y-reverse)));
 */
export const divide_y_0 = () => `
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(0px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(0px * calc(1 - var(--tw-divide-y-reverse)));
    `;
