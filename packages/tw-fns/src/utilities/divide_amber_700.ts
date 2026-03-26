/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-amber-700);
 */
export const divide_amber_700 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-amber-700);
    `;
