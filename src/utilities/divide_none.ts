/**
 * :where(& > :not(:last-child)) {
 *
 * --tw-border-style: none;
 *
 * border-style: none;
 */
export const divide_none = () => `
    :where(& > :not(:last-child)) {
      --tw-border-style: none;
      border-style: none;
    `;
