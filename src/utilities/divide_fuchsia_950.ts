/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-fuchsia-950);
 */
export const divide_fuchsia_950 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-fuchsia-950);
    `;
