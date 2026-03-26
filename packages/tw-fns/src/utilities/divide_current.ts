/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: currentcolor;
 */
export const divide_current = () => `
    :where(& > :not(:last-child)) {
      border-color: currentcolor;
    `;
