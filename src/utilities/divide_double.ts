/**
 * :where(& > :not(:last-child)) {
 *
 * --tw-border-style: double;
 *
 * border-style: double;
 */
export const divide_double = () => `
    :where(& > :not(:last-child)) {
      --tw-border-style: double;
      border-style: double;
    `;
