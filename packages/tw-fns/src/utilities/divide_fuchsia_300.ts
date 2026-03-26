/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-fuchsia-300);
 */
export const divide_fuchsia_300 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-fuchsia-300);
    `;
