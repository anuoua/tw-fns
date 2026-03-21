/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-lime-400);
 */
export const divide_lime_400 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-lime-400);
    `;
