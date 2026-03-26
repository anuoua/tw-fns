/**
 * :where(& > :not(:last-child)) {
 *
 * --tw-border-style: solid;
 *
 * border-style: solid;
 */
export const divide_solid = () => `
    :where(& > :not(:last-child)) {
      --tw-border-style: solid;
      border-style: solid;
    `;
