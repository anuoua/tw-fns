/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-lime-50);
 */
export const divide_lime_50 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-lime-50);
    `;
