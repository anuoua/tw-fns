/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-teal-950);
 */
export const divide_teal_950 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-teal-950);
    `;
