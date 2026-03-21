/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-fuchsia-900);
 */
export const divide_fuchsia_900 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-fuchsia-900);
    `;
