/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-indigo-800);
 */
export const divide_indigo_800 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-indigo-800);
    `;
