/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-lime-700);
 */
export const divide_lime_700 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-lime-700);
    `;
