/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-fuchsia-50);
 */
export const divide_fuchsia_50 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-fuchsia-50);
    `;
