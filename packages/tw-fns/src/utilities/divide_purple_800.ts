/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-purple-800);
 */
export const divide_purple_800 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-purple-800);
    `;
