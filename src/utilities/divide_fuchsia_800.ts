/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-fuchsia-800);
 */
export const divide_fuchsia_800 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-fuchsia-800);
    `;
