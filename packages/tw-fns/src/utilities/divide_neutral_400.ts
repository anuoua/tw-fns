/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-neutral-400);
 */
export const divide_neutral_400 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-neutral-400);
    `;
