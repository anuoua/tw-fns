/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-lime-500);
 */
export const divide_lime_500 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-lime-500);
    `;
