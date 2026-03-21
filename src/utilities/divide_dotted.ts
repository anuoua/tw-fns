/**
 * :where(& > :not(:last-child)) {
 *
 * --tw-border-style: dotted;
 *
 * border-style: dotted;
 */
export const divide_dotted = () => `
    :where(& > :not(:last-child)) {
      --tw-border-style: dotted;
      border-style: dotted;
    `;
