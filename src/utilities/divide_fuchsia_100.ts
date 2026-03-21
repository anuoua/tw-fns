/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-fuchsia-100);
 */
export const divide_fuchsia_100 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-fuchsia-100);
    `;
