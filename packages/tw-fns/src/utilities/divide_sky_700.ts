/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-sky-700);
 */
export const divide_sky_700 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-sky-700);
    `;
