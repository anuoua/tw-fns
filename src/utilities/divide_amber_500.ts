/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-amber-500);
 */
export const divide_amber_500 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-amber-500);
    `;
