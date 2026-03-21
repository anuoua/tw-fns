/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-neutral-700);
 */
export const divide_neutral_700 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-neutral-700);
    `;
