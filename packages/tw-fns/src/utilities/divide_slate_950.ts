/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-slate-950);
 */
export const divide_slate_950 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-slate-950);
    `;
