/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-slate-300);
 */
export const divide_slate_300 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-slate-300);
    `;
