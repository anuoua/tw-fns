/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-neutral-600);
 */
export const divide_neutral_600 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-neutral-600);
    `;
