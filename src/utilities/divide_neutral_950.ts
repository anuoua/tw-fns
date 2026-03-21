/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-neutral-950);
 */
export const divide_neutral_950 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-neutral-950);
    `;
