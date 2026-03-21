/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-amber-200);
 */
export const divide_amber_200 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-amber-200);
    `;
