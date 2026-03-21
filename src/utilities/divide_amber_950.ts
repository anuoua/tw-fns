/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-amber-950);
 */
export const divide_amber_950 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-amber-950);
    `;
