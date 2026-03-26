/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-slate-200);
 */
export const divide_slate_200 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-slate-200);
    `;
