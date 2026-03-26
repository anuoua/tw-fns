/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-fuchsia-200);
 */
export const divide_fuchsia_200 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-fuchsia-200);
    `;
