/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-lime-900);
 */
export const divide_lime_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-lime-900);
    `;
