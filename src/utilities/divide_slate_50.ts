/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-slate-50);
 */
export const divide_slate_50 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-slate-50);
    `;
