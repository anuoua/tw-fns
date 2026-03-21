/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-fuchsia-700);
 */
export const divide_fuchsia_700 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-fuchsia-700);
    `;
