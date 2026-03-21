/**
 * :where(& > :not(:last-child)) {
 *
 * border-color: var(--color-sky-500);
 */
export const divide_sky_500 = () => `
    :where(& > :not(:last-child)) {
      border-color: var(--color-sky-500);
    `;
