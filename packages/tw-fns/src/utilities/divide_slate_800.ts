/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-slate-800);
 */
export const divide_slate_800 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-slate-800);
    `;
