/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-fuchsia-400);
 */
export const divide_fuchsia_400 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-fuchsia-400);
    `;
