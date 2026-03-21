/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-violet-950);
 */
export const divide_violet_950 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-violet-950);
    `;
