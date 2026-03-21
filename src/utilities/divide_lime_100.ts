/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-lime-100);
 */
export const divide_lime_100 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-lime-100);
    `;
